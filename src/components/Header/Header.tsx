import linux from "../../images/Linux.png";
import { useContext } from "react";
import { Box, Image, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { AppContext } from "../AppContext/AppContext";
import { changeLocalStorage } from "../../services/login/storage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
  };

  const change = () => {
    navigate("/info");
  };

  return (
    <Flex padding="5px">
      <Box
        backgroundColor="black"
        display="flex"
        alignItems="center"
        padding="20px"
      >
        {isLoggedIn ? (
          <a href="/session/1">
            <Image
              src={linux}
              alt="Linux Pinguim"
              marginRight="20px"
              height="100px"
            />
          </a>
        ) : (
          <Image
            src={linux}
            alt="Linux Pinguim"
            marginRight="20px"
            height="100px"
          />
        )}
        <Heading as="h1" color="white" textAlign="center" flex="1">
          Penguim bank
        </Heading>
      </Box>

      {isLoggedIn && (
        <>
          <Spacer />
          <Button onClick={change} marginTop="45px" marginRight="15px">
            Info
          </Button>
          <Button onClick={logout} marginTop="45px">
            Logout
          </Button>
        </>
      )}
    </Flex>
  );
};

export default Header;
