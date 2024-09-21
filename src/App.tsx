import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import ContaInfo from "./pages/ContaInfo/contaInfo";

import Conta from "./pages/Conta/conta";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path="/auth" element={<Home />} />
            <Route path="/session/:id" element={<Conta />} />
            <Route path="/info" element={<ContaInfo/>} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
