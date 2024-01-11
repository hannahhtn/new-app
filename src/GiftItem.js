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
  Heading,
} from "@chakra-ui/react";
import EmptyList from "./EmptyList";

const GiftItem = () => {
  let firstGift = {
    id: "1",
    title: "Gift Item",
    price: "$50",
    occasion: "Birthday",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  let giftList = [
    firstGift
  ];
  return giftList.length === 0 ? (
    <EmptyList />
  ) : (
    <Center>
      <Box
        m="1rem"
        p="1rem"
        w="90vw"
        borderRadius="md"
        borderWidth="0.1rem"
      >
        {giftList.map((gift) => {
          return (
            <Stack direction="column" spacing="1rem" key={gift.id}>
              <Text as="b" fontSize="1.2rem">
                {gift.title}
              </Text>
              <Image
                src={gift.image}
                alt="Gift Image"
                maxHeight="20rem"
                objectFit="cover"
                align="center"
              ></Image>
              <VStack align="left" spacing="0">
                <Text fontSize="1rem">
                  {`Price: ${gift.price}`}
                  <br></br>
                  {`Occasion: ${gift.occasion}`}
                </Text>
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
          );
        })}
      </Box>
    </Center>
  );
};

export default GiftItem;
