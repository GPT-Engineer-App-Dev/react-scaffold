import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <IconButton
            icon={isMobile ? <FaTimes /> : <FaBars />}
            variant="outline"
            aria-label="Toggle Navigation"
          />
        </Box>
        <Box display={{ base: isMobile ? "block" : "none", md: "flex" }} flexDirection={{ base: "column", md: "row" }} alignItems="center">
          <Text mx={2}>Home</Text>
          <Text mx={2}>About</Text>
          <Text mx={2}>Contact</Text>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;