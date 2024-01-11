import { Button, Card, CardHeader, CardBody, CardFooter, Heading, Text } from "@chakra-ui/react";

const EmptyList = () => {
    return (
        <Card m="1rem" p="1rem" align="center" variant="filled">
        <CardHeader>
          <Heading size="md"> Your list is currently empty</Heading>
        </CardHeader>
        <CardBody>
          <Text>Start adding now!</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue">Add Item</Button>
        </CardFooter>
      </Card>
    );
}
 
export default EmptyList;