/** @format */

import "./App.css";
import { Box, Center, ChakraProvider, Stack, Text, Image, VStack, Button, HStack } from "@chakra-ui/react";
import Nav from './Nav.js'

function App() {
  let gift = {
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    <ChakraProvider>
      <Nav title="My Wish List"></Nav>
      <Center>
        <Box p="0.5rem" w="90vw" borderRadius="md" borderWidth="0.1rem">
          <Stack direction="column" spacing="1rem">
            <Text as="b" fontSize="1.2rem">
              Gift Item
            </Text>
            <Image
              src={gift.image}
              alt="Gift Image"
              maxHeight="20rem"
              objectFit="cover"
              align="center"
            ></Image>
            <VStack align="left" spacing="0">
              <Text>Price: $50</Text>
            </VStack>
            <HStack justify="space-between">
              <Button width="30%" colorScheme="teal">
                Purchase
              </Button>
              <Button width="30%" colorScheme="red">
                Remove
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
