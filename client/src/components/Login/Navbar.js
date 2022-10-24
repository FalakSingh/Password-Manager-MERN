import { Box, Button, HStack, Icon, Spacer, Text } from "@chakra-ui/react";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

const Navbar = () => {
  return (
    <Box
      pos="fixed"
      w="100%"
      backgroundColor="white"
      h="4rem"
      borderEndRadius="4px"
      boxShadow="lg"
      px={{base:"2em"}}
    >
      <HStack>
        <Text m="1rem" mr="0" fontSize="xl" color="blackAlpha.700">
          Password Manager
        </Text>
        <Icon color="blackAlpha.700" as={KeyRoundedIcon} />
        <Spacer />
        <Button m="1em" variant="ghost">
          Register
        </Button>
      </HStack>
    </Box>
  );
};

export default Navbar;
