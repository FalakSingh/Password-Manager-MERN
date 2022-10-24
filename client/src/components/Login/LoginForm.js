import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ isSubmit }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    isSubmit(input);
  };
  return (
    <Box h={{base:"100vh"}} w={{base:"50%"}} align="center">
      <Box
        w="70%"
        p="50px"
        mt="20%"
        
        borderRadius="20px"
        boxShadow="xl"
        backgroundColor="white"
      >
        <Heading color="gray.500" mb="50px" fontSize="25">
          Please Login to continue
        </Heading>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              mb="20px"
              pr="4.5rem"
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              isRequired={true}
              autoComplete="off"
              maxLength={40}
            />
          </InputGroup>
          <InputGroup mb="20px">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              isRequired={true}
              maxLength={40}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type="submit" colorScheme="messenger">
            Login
          </Button>
        </form>
        <a href="#"> Forgot Password? </a>
        {/* <Link to="localhost:3000"> Forgot Password? </Link> */}
      </Box>
    </Box>
  );
};

export default LoginForm;
