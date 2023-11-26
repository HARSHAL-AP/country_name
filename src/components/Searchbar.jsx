import React from "react";
import { Box, Input } from "@chakra-ui/react";
const Searchbar = ({ onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <Box maxW="500px" m="auto" mt="50px">
      <Input
      bg="blue.500"
        type="text"
        placeholder="Search By Currency Ex.INR,EUR"
        _placeholder={{ color: 'white' }}
        onChange={handleInputChange}
        color='white'
      />
    </Box>
  );
};

export default Searchbar;
