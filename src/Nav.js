/** @format */

import { Button, Stack } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Stack
      p={{ base: "1rem", sm: "2rem", md: "2rem 10vw" }}
      direction={{ base: "column", sm: "column", md: "row" }}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Button
        p="0.5rem"
        colorScheme="teal"
        variant="outline"
        as="b"
        size={{ base: "sm", sm: "sm", md: "md" }}
      >
        Browse current mixed drink recipes
      </Button>
      <Button
        p="0.5rem"
        colorScheme="blue"
        variant="outline"
        as="b"
        size={{ base: "sm", sm: "sm", md: "md" }}
      >
        Add a new drink recipe
      </Button>
    </Stack>
  );
};

export default Nav;
