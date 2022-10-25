
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
          ml={{ base: "-1em" }}
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
      </HStack>
    </Box>
  )
}

export default UserNav