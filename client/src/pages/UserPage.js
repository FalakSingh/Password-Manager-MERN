import { Flex } from "@chakra-ui/react";
import PageTab from "../components/userPage/PageTab";
import UserNav from "../components/userPage/UserNav";
import { useState } from "react";
import PasskeyModal from "../components/userPage/PasskeyModal";

const UserPage = () => {
  const [isPasskey, setIsPasskey] = useState(false);

  const passkeyFunc = (passkey) => {
    window.sessionStorage.setItem("passkey", passkey);
    setIsPasskey(true);
  };

  return (
    <div>
      <UserNav />
      {!isPasskey ? <PasskeyModal passkeyFunc={passkeyFunc} passkeyVal={isPasskey} /> : null}
      <Flex backgroundColor="blackAlpha.50" h="100vh" justify="center">
        <PageTab />
      </Flex>
    </div>
  );
};

export default UserPage;
