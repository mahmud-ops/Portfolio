import { Box, Center } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <Box h="100vh" overflow="hidden">
      <Box>
        <NavBar />
      </Box>

      <Box h="calc(100vh - 60px)" overflowY="auto" scrollSnapType="y mandatory">
        <Box h="100vh" scrollSnapAlign="start" bgColor="rgba(0,0,0,0.05)">
          <Center>
            <Hero />
          </Center>
        </Box>
        <Box h="100vh" scrollSnapAlign="start" bgColor="rgba(0,0,0,0.15)">
          <Center>
            <Skills/>
          </Center>
        </Box>
        <Box h="100vh" scrollSnapAlign="start" bgColor="rgba(0,0,0,0.25)">
          <Center>Contributions</Center>
        </Box>
        <Box h="100vh" scrollSnapAlign="start" bgColor="rgba(0,0,0,0.35)">
          <Center>Socials</Center>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
