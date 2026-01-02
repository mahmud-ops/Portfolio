import { Avatar, Flex } from "@chakra-ui/react";
import ThemeToggleSwitch from "./ThemeToggleSwitch";

const NavBar = () => {
  return (
    <Flex
      h="60px"
      align="center" // vertical center
      justify="space-between" // optional: spread items
      px={4} // optional padding left/right
    >
      <Avatar />
      <ThemeToggleSwitch />
    </Flex>
  );
};

export default NavBar;
