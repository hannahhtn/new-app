/** @format */

import "./App.css";
import { Box, Center, ChakraProvider, Stack, Text, Image, VStack, Button, HStack } from "@chakra-ui/react";
import Nav from './Nav.js'
import GiftItem from "./GiftItem.js";

function App() {
  return (
    <ChakraProvider>
      <Nav title="My Wish List"></Nav>
      <GiftItem />
    </ChakraProvider>
  );
}

export default App;
