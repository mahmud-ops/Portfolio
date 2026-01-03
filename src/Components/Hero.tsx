import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import BG_dark from "../assets/BG_Dark.jpg";
import BG_light from "../assets/BG_Light.jpg";

import IntroCard from "./IntroCard";

const Hero = () => {
  const bgImage = useColorModeValue(BG_light, BG_dark);

  return (
    <Box position="relative" w="full" h="100vh">
      {/* Background Image */}
      <Box
        position="absolute"
        inset={0}
        bgImage={`url(${bgImage})`}
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
