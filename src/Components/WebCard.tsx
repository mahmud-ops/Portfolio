import {
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiChakraui } from "react-icons/si";

import webImg from "../assets/WebImg.png";

const techIcons = [
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3Alt, label: "CSS3" },
  { icon: FaJs, label: "JavaScript" },
  { icon: FaReact, label: "React" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiChakraui, label: "Chakra UI" },
];

const WebCard = () => {
  return (
    <Card my={4} variant="elevated" w={{ base: "90vw", md: "30vw" }}>
      <Image src={webImg} alt="Frontend development" aspectRatio={16/9}/>

      <CardBody>
        <Heading fontSize="2em" mb={4}>
          Frontend Development
        </Heading>
        <Text fontSize="sm" opacity={0.7} mb={4}>
          Building responsive and interactive web interfaces
        </Text>
        <HStack>
          {techIcons.map(({ icon, label }) => (
            <Tooltip key={label} label={label} hasArrow>
              <Icon
                as={icon}
                boxSize={5}
                opacity={0.7}
                transition="all 0.2s ease"
                _hover={{
                  opacity: 1,
                  transform: "scale(1.15)",
                }}
              />
            </Tooltip>
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default WebCard;
