import { ReactNode } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider>
     
      <Box minHeight="100vh" background="#000" padding="25px">
        <Header/>
        {children}
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
