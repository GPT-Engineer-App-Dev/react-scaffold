import { Box, Container, Flex, Heading, HStack, IconButton, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">My Website</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="/" display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link href="/about" display="flex" alignItems="center">
            <FaInfoCircle />
            <Text ml={2}>About</Text>
          </Link>
          <Link href="/contact" display="flex" alignItems="center">
            <FaPhone />
            <Text ml={2}>Contact</Text>
          </Link>
        </HStack>
      </Flex>
      <Box as="main" p={4}>
        <VStack spacing={4}>
          <Heading>Welcome to My Website</Heading>
          <Text>This is a basic structure of a React app with Chakra UI.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;