import linux from "../../images/Linux.png";
import { Box, ChakraProvider, Image, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <ChakraProvider>
      <Box backgroundColor="black" display="flex" alignItems="center" padding="20px">
        <Image src={linux} alt="Linux Pinguim" marginRight="20px" height="100px" />
        <Heading as="h1" color="white" textAlign="center" flex="1">
          bank
        </Heading>
      </Box>
    </ChakraProvider>
  );
}

export default Header;
