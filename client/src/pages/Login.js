import LoginForm from "../components/Login/LoginForm";
import { Spacer, Flex } from "@chakra-ui/react";
import Navbar from "../components/Login/Navbar";
import Feature from "../components/Login/Feature";

const Login = () => {
  const isSubmitted = (loginVal) => {
    console.log(loginVal);
  };
  return (
    <div>
      <Navbar />
      <Flex backgroundColor="blackAlpha.50">
        <Feature />
        <Spacer />
        <LoginForm isSubmit={isSubmitted} />
      </Flex>
    </div>
  );
};

export default Login;
