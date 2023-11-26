import React from 'react'
import { Box, Image, Badge, Heading, Text, Stack } from '@chakra-ui/react';
const Card = ({country}) => {
    const { name, population, capital, region, cca2 } = country;
    
  return (
    <Box bg="blue.100"
    p={5}
    borderRadius="md"
    boxShadow="md">
    <Image src={`https://flagsapi.com/${cca2}/flat/64.png`} alt={`${name.common} Flag`}  w="100%"/>
    <Box >
      <Stack spacing={2}>
        <Heading fontSize="2xl">{name.common}</Heading>
        <Text fontSize="sm">
          <strong>Population:</strong> {population}
        </Text>
        <Text fontSize="sm">
          <strong>Capital:</strong> {capital}
        </Text>
        <Text fontSize="xm">
        <strong>region:</strong> <Badge colorScheme="teal">{region}</Badge>
        </Text>
      </Stack>
    </Box>
  </Box>
  )
}

export default Card