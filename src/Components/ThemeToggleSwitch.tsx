import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggleSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      {
        colorMode == 'dark' ? <FaMoon/> : <FaSun/>  
      }
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    </HStack>
  );
};

export default ThemeToggleSwitch;
