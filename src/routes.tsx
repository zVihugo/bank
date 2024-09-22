import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Conta from "./pages/Conta/conta";
import ContaInfo from "./pages/ContaInfo/contaInfo";
import { useContext } from "react";
import { AppContext } from "./components/AppContext/AppContext";

const MainRoutes = () => {
    const {isLoggedIn} = useContext(AppContext);
    return(
        <Routes>
            <Route path="/auth" element={<Home />} />
            <Route path="/session/:id" element={isLoggedIn ? <Conta /> : <Home/>} />
            <Route path="/info" element={<ContaInfo/>} />
          </Routes>
    )
}

export default MainRoutes;