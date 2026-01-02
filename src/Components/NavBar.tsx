import { Avatar, Flex } from "@chakra-ui/react";
import ThemeToggleSwitch from "./ThemeToggleSwitch";
import avatar from "../assets/PFP.png"
import NavLinks from "./NavLinks";
const NavBar = () => {
  return (
    <Flex
      h="60px"
      align="center" // vertical center
      justify="space-between" // optional: spread items
      px={4} // optional padding left/right
    >
      <Avatar name="Mahmud" src={avatar}/>
      <NavLinks/>
      <ThemeToggleSwitch />
    </Flex>
  );
};

export default NavBar;
