/** @format */

import "./App.css";
import { ChakraProvider, } from "@chakra-ui/react";
import Nav from './Nav.js'
import RecipeItem from "./RecipeItem.js";

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <RecipeItem />
    </ChakraProvider>
  );
}

export default App;
