import linux from "../../images/Linux.png";
import { useContext } from "react";
import { Box, Image, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { AppContext } from "../AppContext/AppContext";

const Header = () => {
  const {setIsLoggedIn, isLoggedIn} = useContext(AppContext);

  const logout = () => {
    setIsLoggedIn(false);
  }

  return (
    <Flex padding="5px">
      <Box
        backgroundColor="black"
        display="flex"
        alignItems="center"
        padding="20px"
      >
        <Image
          src={linux}
          alt="Linux Pinguim"
          marginRight="20px"
          height="100px"
        />
        <Heading as="h1" color="white" textAlign="center" flex="1">
          Penguim bank
        </Heading>
      </Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button onClick={logout} marginTop="45px">Logout</Button>
        </>
      )}
    </Flex>
  );
};

export default Header;
