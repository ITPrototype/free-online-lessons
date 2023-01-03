import { Content, SideNavbar, TopNavbar } from "../utils/exports";
import { Flex } from "@chakra-ui/react";

function HomePage() {
  return (
    <Flex flexDirection={"row"}>
      <SideNavbar />
      <Flex flexDirection={"column"} width={"70%"}>
        <TopNavbar />
        <Content />
      </Flex>
    </Flex>
  );
}

export default HomePage;
