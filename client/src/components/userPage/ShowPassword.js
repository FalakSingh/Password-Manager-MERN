import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import PasswordEntry from "./PasswordEntry";

const ShowPassword = () => {
  const [havePasswords, setHavePasswords] = useState(false);
  const [Passwords, setPasswords] = useState();
  const toast = useToast();
  const getPasswords = async () => {
    const passkey = window.sessionStorage.getItem("passkey");
    if (!passkey) {
      toast({
        title: "Passkey Not Found",
        description: "Please Refresh the Page and Provide a Passkey",
        status: "warning",
        isClosable: true,
      });
      return;
    }
    const url = process.env.REACT_APP_GETPASS_API;
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${window.sessionStorage.getItem("token")}`;
    axios
      .post(url, { passkey: passkey })
      .then((response) => {
        setPasswords(response.data.data);
        setHavePasswords(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteEntry = async (id) => {
    const url = process.env.REACT_APP_DELPASS_API;
    axios
      .post(url, { entryId: id })
      .then((response) => {
        const { data, success } = response.data;
        if (success && data) {
          toast({
            title: data,
            status: "success",
            isClosable: true,
          });
          getPasswords();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button onClick={getPasswords} colorScheme={"messenger"}>
        Get Passwords
      </Button>
      {havePasswords && (
        <PasswordEntry Passwords={Passwords} deleteButton={deleteEntry} />
      )}
    </div>
  );
};

export default ShowPassword;
