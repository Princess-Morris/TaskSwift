import React from 'react'
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard () {

  
  return (
    <SimpleGrid p='10px' spacing={10} minChildWidth='250px'>
      <Box bg='white' h='150px' border='1px solid'>
        <Text
        color={{base: 'red', md: 'blue', lg:'pink'}}
        >HEllo text</Text>
      </Box>
      <Box bg='white' h='150px' border='1px solid'>Hello</Box>
      <Box bg='white' h='150px' border='1px solid'></Box>
      <Box bg='white' h='150px' border='1px solid'></Box>
      <Box bg='white' h='150px' border='1px solid'></Box>
      <Box bg='white' h='150px' border='1px solid'></Box>
      <Box bg='white' h='150px' border='1px solid'></Box>
      <Box bg='white' h='150px' border='1px solid'></Box>
      <Box bg='white' h='150px' border='1px solid'></Box>
      <Box bg='white' h='150px' border='1px solid'></Box>


    </SimpleGrid>

  );

}