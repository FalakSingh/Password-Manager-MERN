import { Box, VStack, Text, Icon } from "@chakra-ui/react";
import DoneIcon from "@mui/icons-material/Done";


const Feature = () => {
  return (
    <Box>
      <VStack mt={{base:"10em"}} ml={{base:"2em"}} alignItems="left">
        <Text as="span" color="blackAlpha.700" fontSize="3xl">
          <Icon as={DoneIcon} />
          &nbsp; Save all of your Passwords in one place.
        </Text>
        <Text as="span" color="blackAlpha.700" fontSize="3xl">
          <Icon as={DoneIcon} />
          &nbsp; Keeps Your Passwords Safe.
        </Text>
        <Text as="span" color="blackAlpha.700" fontSize="3xl">
          <Icon as={DoneIcon} />
          &nbsp; Cannot be decrypted without your passkey.
        </Text>
      </VStack>
    </Box>
  );
};

export default Feature;
