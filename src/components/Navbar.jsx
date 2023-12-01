import { UnlockIcon } from "@chakra-ui/icons";
import { Flex, Box, Heading, Text, Spacer, Button, HStack, useToast, Avatar, AvatarBadge} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />
    })
  }

  // const addy = {
  //   background: "#ebfbff",
  //   // outline: "none",
  //   borderRadius: "6px",
  //   border: "none",
  //   padding: "5px 8px"
  // }
  
  return (

    <Flex as="nav" p="10px" bg="teal.200" mb='40px' borderRadius='5px'
    alignItems="center" 
    position={{lg: 'sticky'}}
    top={{lg: 0}}
    zIndex={{lg: 1000}}
    >
        <Heading as="h2">Swift Task</Heading>
        <Spacer />

        <HStack spacing="20px">
        <Avatar src="/img/peach.png">
          <AvatarBadge width='1.2em' bg='teal.500'>
           <Text fontSize='xs' color='white'>3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>okpataprincessmorris@gmail.com</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>
        
    </Flex>
  );
}

