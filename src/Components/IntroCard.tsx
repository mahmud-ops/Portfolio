import {
  Badge,
  Card,
  CardBody,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";

const IntroCard = () => {
  return (
    <Card
      w={{ base: "90vw", md: "50vw" }}
      variant="elevated"
    >
      <CardBody>
        <Flex
          direction={{ base: "column", md: "row" }}
        >
          <Stack spacing={3}>
            <Text
              fontWeight="extrabold"
              fontSize={{ base: "2.5rem", md: "4rem", lg: "4.5rem" }}
              lineHeight="1.1"
            >
              Abdullah Al Mahmud
            </Text>

            <Badge w="fit-content" colorScheme="green">
              Linux-first
            </Badge>

            <Text maxW="600px">
              Focused on web development with a security-aware mindset.
              Building strong full-stack fundamentals through real projects.
            </Text>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default IntroCard;
