/** @format */

import {
  Box,
  Center,
  Stack,
  Text,
  Image,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";

const RecipeItem = () => {
  let recipe = {
    id: "1",
    name: "Moscow mule",
    prepTime: "10 mins",
    ingredients: ["Simple syrup", "Bitter", "Bourbon whiskey"],
    image:
      "https://images.unsplash.com/photo-1633152685816-8cd4a7443c84?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  let recipeList = [recipe];

  return (
    <Center>
      <Box m="1rem" p="1.5rem" borderRadius="md" borderWidth="0.1rem">
        {recipeList.map((recipe) => {
          return (
            <Stack
              direction={{ base: "column", sm: "column", md: "row" }}
              spacing="1rem"
              gap={{ base: "1rem", sm: "1rem", md: "2rem" }}
              key={recipe.id}
            >
              <VStack alignItems="stretch">
                <Text as="b" fontSize="1.2rem">
                  {recipe.name}
                </Text>
                <Image
                  src={recipe.image}
                  alt="Gift Image"
                  maxHeight="20rem"
                  objectFit="cover"
                  align="center"
                ></Image>
              </VStack>

              <VStack gap="1rem" justifyContent="space-around">
                <VStack align="left" spacing="0">
                  <Text fontSize="1rem">
                    <strong>Prep time: </strong>
                    {`${recipe.prepTime}`}
                  </Text>
                  <Text fontSize="1rem">
                    <strong>Main ingredients: </strong>
                    {`${recipe.ingredients.toString().replaceAll(",", ", ")}`}
                  </Text>
                </VStack>
                <HStack w="100%" justify="space-between">
                  <Button
                    colorScheme="teal"
                    size={{ base: "sm", sm: "sm", md: "md" }}
                  >
                    Try this recipe
                  </Button>
                  {/* <Button colorScheme="red">
                    Remove
                  </Button> */}
                </HStack>
              </VStack>
            </Stack>
          );
        })}
      </Box>
    </Center>
  );
};

export default RecipeItem;
