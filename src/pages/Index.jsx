import { Box, Flex, Input, Button, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaBars, FaUserCircle, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Flex height="100vh">
      {/* Sidebar */}
      <Box width="250px" bg={bgColor} p={4} borderRight="1px" borderColor={borderColor}>
        <Flex direction="column" height="100%">
          <Box mb={8}>
            <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2dvfGVufDB8fHx8MTcxMzg4NTk5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" boxSize="100px" />
          </Box>
          <VStack align="start" spacing={4}>
            <Button leftIcon={<FaBars />} variant="ghost" justifyContent="start" w="full">
              Menu
            </Button>
            <Button leftIcon={<FaUserCircle />} variant="ghost" justifyContent="start" w="full">
              Profile
            </Button>
          </VStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction="column" flex="1" p={8}>
        <Flex alignItems="center" mb={4}>
          <Image borderRadius="full" boxSize="50px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMzg4NTk5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="User Avatar" mr={4} />
          <Text fontSize="xl" fontWeight="bold">
            User Name
          </Text>
        </Flex>

        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">
            Ask me anything!
          </Text>
          <Input placeholder="Type your question here..." size="lg" />
          <Button rightIcon={<FaPaperPlane />} colorScheme="blue">
            Send
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Index;
