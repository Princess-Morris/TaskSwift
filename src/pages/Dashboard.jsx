import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text, Flex, Box, Heading, HStack, Spacer, Divider, Avatar} from "@chakra-ui/react";
// import { useLoaderData } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';

import {Button} from '@chakra-ui/react'
import {EditIcon} from '@chakra-ui/icons'
import {ViewIcon} from '@chakra-ui/icons'

export default function Dashboard () {
  //  const tasks = useLoaderData()

  const [tasks, setTasks] = useState([])

  useEffect(() => {
     taskLoad()
  }, [])

  const taskLoad = async () => {
    const res = await fetch('http://localhost:5000/tasks')

    const data = await res.json()
    setTasks(data)
  }
  
  return (
    <SimpleGrid spacing={10} minChildWidth='300px'>
       {tasks && tasks.map((task) => (
        <Card 
         borderTop='4px' borderColor='gray.400' bg='white'
        key={task.id}>
          <CardHeader>
          <Flex gap='5'>
              <Avatar src={task.img} />
              <Box>
                <Heading as='h2' size='sm' mb='5px'>{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>
           
          <CardBody color='gray.500' >
            <Text >{task.description}</Text>
          </CardBody>

          <Divider color='gray.200'/>

          <CardFooter>
             <HStack>
           <Button
           variant='ghost'
            leftIcon={<ViewIcon />}
            colorScheme="teal"
           >
            View
           </Button>

           <Button 
           variant='ghost'
           leftIcon={<EditIcon />}
           colorScheme="teal"
           >
            Watch
           </Button>
             </HStack>
             
          </CardFooter>
        </Card>
       ))}
    </SimpleGrid>

  );

}
