import { Box, Center } from "@chakra-ui/react";
import BG from '../assets/BG_image.jpg';
import IntroCard from "./IntroCard";

const Hero = () => {
  return (
    <Box position="relative" w="full" h="100vh">
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bgImage={`url(${BG})`}
        bgSize="cover"
        bgPosition="center"
        zIndex={0}
      />

      <Center h="full" zIndex={1} position="relative">
        <IntroCard />
      </Center>
    </Box>
  );
};

export default Hero;
