import { Button, Flex, Input, Box, VStack, Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

const ResetPass = () => {
  const url = window.location.href;
  const resetToken = url.split("/").pop();

  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

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
    console.log(input);
  };

  return (
    <div>
      <Navbar btnName="Login" path="/" />
      <Flex
        h="100vh"
        backgroundColor="blackAlpha.50"
        align="center"
        direction="column"
      >
        <Box
          w={{ base: "90%", md:"70%", xl:"40%" }}
          mt={{ base:"12em", xl:"20em" }}
          backgroundColor="white"
          boxShadow="lg"
          borderRadius="20px"
          p={{ base: "2em" }}
        >
          <form onSubmit={handleSubmit}>
            <VStack gap={4}>
              <Heading fontSize="xl" color="blackAlpha.700">
                Reset Password
              </Heading>
              <Input
                onChange={handleChange}
                placeholder="Password"
                name="password"
              />
              <Input
                onChange={handleChange}
                placeholder="Confirm Password"
                name="confirmPassword"
              />
              <Button type="submit" colorScheme="messenger">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </div>
  );
};

export default ResetPass;
