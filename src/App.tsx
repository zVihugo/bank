import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import ContaInfo from "./pages/ContaInfo/contaInfo";
import Conta from "./pages/Conta/conta";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import { AppContextProvider } from "./components/AppContext/AppContext";


function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path="/auth" element={<Home />} />
            <Route path="/session/:id" element={<Conta />} />
            <Route path="/info" element={<ContaInfo/>} />
          </Routes>
        </Layout>
      </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
