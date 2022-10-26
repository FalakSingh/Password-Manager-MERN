import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AddPassword from "../../features/addPassword";
const PageTab = () => {
  return (
    <Tabs mt={{base:"5em"}} w="70%" align="center" isFitted variant="solid-rounded" colorScheme="blackAlpha">
      <TabList mb="1em">
        <Tab>Add Password</Tab>
        <Tab>Show Passwords</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AddPassword />
        </TabPanel>
        <TabPanel>
          {/* <ShowPassword /> */}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PageTab;
