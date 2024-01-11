import { Heading } from "@chakra-ui/react";

const Nav = ({ title }) => {
    return (
        <Heading align='center' size="xl" p="1rem">
          {title}
        </Heading>
    );
}
 
export default Nav;