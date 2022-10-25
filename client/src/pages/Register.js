import Navbar from "../components/Navbar/Navbar";
import RegisterForm from "../components/Register/RegisterForm";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const isSubmitted = async (userInfo) => {
    const url = process.env.REACT_APP_REGISTER_API;
    axios
      .post(url, userInfo)
      .then((response) => {
        const { success, data } = response.data;
        if (success) {
          toast({
            title: data,
            status: "success",
            isClosable: true,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        const { success, error } = err.response.data;
        if (!success) {
          toast({
            title: error,
            status: "error",
            isClosable: true,
          });
        }
      });
  };

  return (
    <div>
      <Navbar btnName="Login" path="/" />
      <RegisterForm isSubmit={isSubmitted} />
    </div>
  );
};

export default Register;
