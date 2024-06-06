import { Box, Flex, Text, VStack, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <HStack spacing={4}>
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" color="white" />
          <IconButton aria-label="About" icon={<FaInfoCircle />} size="lg" variant="ghost" color="white" />
        </HStack>
      </Flex>
      <Container centerContent maxW="container.md" height="calc(100vh - 80px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with a navigation bar.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;