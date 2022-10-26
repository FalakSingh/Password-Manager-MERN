import { HStack, Box, Text, Icon, Spacer, Button } from "@chakra-ui/react";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";


const UserNav = () => {
  return (
    <Box
      pos="fixed"
      w="100%"
      backgroundColor="white"
      h="4rem"
      boxShadow="lg"
      px="2em"
    >
      <HStack>
        <Text
          mt={{ base: "0.5em", lg: "1rem" }}
          mr={{ base: "0", lg: "0" }}
          ml={{ base: "18em" }}
          fontSize="xl"
          color="blackAlpha.700"
        >
          Password Manager
        </Text>
        <Icon
          pos="relative"
          top={{ base: "0.3em", lg: "0.4em" }}
          color="blackAlpha.700"
          as={KeyRoundedIcon}
        />
        <Spacer />
        <Button top={{ base: ".5em" }} right={{ base: "28em" }} variant="solid">
          Logout
        </Button>
      </HStack>
    </Box>
  )
}

export default UserNav