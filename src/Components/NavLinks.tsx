import {
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const NavLinks = () => {
  return (
    <HStack
      spacing={4}
      display={{
        base: "none",
        md: "flex",
      }}
    >
      <Menu>
        <Button variant="ghost">Home</Button>

        <MenuButton as={Button} rightIcon={<BiChevronDown />}>
          Works
        </MenuButton>
        <MenuList>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Blogs</MenuItem>
          <MenuItem>Notes</MenuItem>
        </MenuList>
      </Menu>

      <Button variant="ghost">Skills</Button>
      <Button variant="ghost">Contributions</Button>
      <Button variant="ghost">Socials</Button>
    </HStack>
  );
};

export default NavLinks;
