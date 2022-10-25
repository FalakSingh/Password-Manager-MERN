import LoginForm from "../components/Login/LoginForm";
import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Feature from "../components/Login/Feature";

const Login = () => {
  const isSubmitted = (loginVal) => {
    console.log(loginVal);
  };
  return (
    <div>
      <Flex
        backgroundColor="blackAlpha.50"
        direction={{ base: "column", lg:"row" }}
        w={{ base: "100%" }}
        h={{md:"100vh"}}
      >
        <Navbar btnName="Register" path="register" />
        <Feature />
        <LoginForm isSubmit={isSubmitted} /> 
      </Flex>
    </div>
  );
};

export default Login;
