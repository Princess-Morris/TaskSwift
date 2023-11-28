import { Flex, Box, Heading, Text, Spacer, Button, HStack} from "@chakra-ui/react";

export default function Navbar() {

  const addy = {
    background: "#ebfbff",
    // outline: "none",
    borderRadius: "6px",
    border: "none",
    padding: "5px 8px"
  }
  
  return (

    <Flex as="nav" p="10px" bg="yellow" 
    alignItems="center" 
    >
        <Heading as="h2">Swift Task</Heading>
        <Spacer />

        <HStack spacing="20px">
        <Box bg="gray" p="10px">M</Box>
        <Text>okpataprincessmorris@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
        </HStack>
        
    </Flex>
  );
}

