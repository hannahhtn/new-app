/** @format */

import { Button, HStack, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Nav = ({ title }) => {
  return (
    <HStack px="1rem" py="1.5rem" direction="row" justifyContent="space-between">
      <Heading align="center" size="xl">
        {title}
      </Heading>
      <Button p="0.5rem" colorScheme="teal" variant="outline" as="b">Add Gift</Button>
    </HStack>
  );
};

export default Nav;
