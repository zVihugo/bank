import "./App.css";
import { BrowserRouter} from "react-router-dom";
import MainRoutes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import { AppContextProvider } from "./components/AppContext/AppContext";
import {  createLocalStorage, getAllLocalStorage  } from "./services/login/storage";


function App() {
  if(!getAllLocalStorage()){
    createLocalStorage();
  }
  
  return (
    <BrowserRouter>
      <AppContextProvider>
      <ChakraProvider>
        <Layout>
            <MainRoutes/>
        </Layout>
      </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
