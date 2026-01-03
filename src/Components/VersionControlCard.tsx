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

import { SiGithub, SiGit } from "react-icons/si";

import verConImg from "../assets/VerCon.png"; // your image

const versionControlIcons = [
  { icon: SiGit, label: "Git" },
  { icon: SiGithub, label: "GitHub" },
];

const VersionControlCard = () => {
  return (
    <Card
      my={4}
      variant="elevated"
      w={{ base: "90vw", md: "30vw" }}
    >
      <Image src={verConImg} alt="Version Control" aspectRatio={16/9}/>

      <CardBody>
        <Heading fontSize="2em" mb={2}>
          Version Control
        </Heading>

        <Text fontSize="sm" opacity={0.7} mb={4}>
          Track changes, collaborate & manage code efficiently
        </Text>

        <HStack>
          {versionControlIcons.map(({ icon, label }) => (
            <Tooltip key={label} label={label} hasArrow>
              <Icon
                as={icon}
                boxSize={6}
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

export default VersionControlCard;
