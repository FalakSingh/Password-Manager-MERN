import {
  Button,
  Input,
  InputGroup,
  VStack,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPass } from "./addPassSlice";

const AddPassword = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [passInput, setPassInput] = useState({
    website: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPassInput((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const passkey = window.sessionStorage.getItem("passkey")
    if (!passkey) {
      toast({
        title:"Passkey Not Found",
        description:"Please Refresh the Page and Provide a Passkey",
        success:"error",
        isClosable:true,
      })
    }
    const addPassInput = { ...passInput, passkey:passkey}
    console.log(addPassInput)
    dispatch(addPass(addPassInput));
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack align="center">
        <Input
          onChange={handleChange}
          placeholder="Website"
          name="website"
          required={true}
        />
        <Input onChange={handleChange} placeholder="Username" name="username" />
        <Input
          onChange={handleChange}
          placeholder="Email Address"
          name="email"
          autoComplete="off"
        />
        <InputGroup>
          <Input
            onChange={handleChange}
            type={show ? "text" : "password"}
            placeholder="Password"
            name="password"
            required={true}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button type="submit" colorScheme="messenger">
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export default AddPassword;
