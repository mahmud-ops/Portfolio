import { Heading, Stack } from "@chakra-ui/react";
import WebCard from "./WebCard";
import GraphicsCard from "./GraphicsCard";
import VersionControlCard from "./VersionControlCard";

const Skills = () => {
  return (
    <Stack spacing={8}>
      <Heading textAlign="center">Skills</Heading>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        justify="center"
      >
        <WebCard />
        <VersionControlCard />
        <GraphicsCard />
      </Stack>
    </Stack>
  );
};

export default Skills;
