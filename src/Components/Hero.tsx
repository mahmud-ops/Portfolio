import { Box, Center } from "@chakra-ui/react";
import IntroCard from "./IntroCard";

const Hero = () => {
  return (
    <>
      <Box position="relative" w="full" h="100vh">
        <Center height={"calc(100vh - 60px)"}>
          <IntroCard />
        </Center>
      </Box>
    </>
  );
};

export default Hero;
