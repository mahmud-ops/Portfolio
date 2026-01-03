import {
  Card,
  CardBody,
  Heading,
  Icon,
  Image,
  Tooltip,
  Text,
  HStack,
} from "@chakra-ui/react";

import { SiCanva } from "react-icons/si";

import graphicsImg from "../assets/BG_Dark.jpg"; // use any minimal design image

const GraphicsCard = () => {
  return (
    <Card
      my={4}
      variant="elevated"
      w={{ base: "90vw", md: "30vw" }}
    >
      <Image src={graphicsImg} alt="Graphics design" aspectRatio={16/9} />

      <CardBody>
        <Heading fontSize="2em" mb={2}>
          Graphics Design
        </Heading>

        <Text fontSize="sm" opacity={0.7} mb={4}>
          Visual content & social graphics
        </Text>

        <HStack>
          <Tooltip label="Canva" hasArrow>
            <Icon
              as={SiCanva}
              boxSize={6}
              opacity={0.7}
              transition="all 0.2s ease"
              _hover={{
                opacity: 1,
                transform: "scale(1.15)",
              }}
            />
            
          </Tooltip>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GraphicsCard;
