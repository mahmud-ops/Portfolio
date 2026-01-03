import {
  Badge,
  Card,
  CardBody,
  Flex,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";

const IntroCard = () => {
  return (
    <Card
      w={{ base: "90vw", md: "50vw" }}
      bg="rgba(255, 255, 255, 0.15)" // light tint
      backdropFilter="blur(10px)" // frosted glass
      borderRadius="2xl"
      border="1px solid rgba(255, 255, 255, 0.3)"
      boxShadow="lg"
      overflow="hidden"
    >
      <CardBody>
        <Flex direction={{ base: "column", md: "row" }}>
          <Stack spacing={3}>
            <Text
              fontWeight="extrabold"
              fontSize={{ base: "2.5rem", md: "4rem", lg: "4.5rem" }}
              lineHeight="1.1"
              color="white"
            >
              Abdullah Al Mahmud
            </Text>

            <Badge w="fit-content" colorScheme="green">
              Linux-first
            </Badge>

            <Text maxW="600px" color="whiteAlpha.900">
              Focused on web development with a security-aware mindset. Building
              strong full-stack fundamentals through real projects.
            </Text>
          </Stack>
        </Flex>

        <Button
          colorScheme="green"
          size="lg"
          rounded="full"
          mt={4} // space from text
          _hover={{ bg: "green.500", transform: "scale(1.05)" }}
        >
          View Projects
        </Button>
      </CardBody>
    </Card>
  );
};

export default IntroCard;
