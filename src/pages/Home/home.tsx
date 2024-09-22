import { Input } from "@chakra-ui/react";
import { Card } from "../../components/Card/Card";
import Botao from "../../components/Button/Button";
import { login } from "../../services/login/login";
import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AppContext } from "../../components/AppContext/AppContext";
import { changeLocalStorage } from "../../services/login/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const {setIsLoggedIn} = useContext(AppContext)

  const validateUser = async(email: string) => {
    const loggedIn = await login(email);

    if(!loggedIn){
      alert("Invalid email!");
    }else{
      setIsLoggedIn(true);
      changeLocalStorage({login: true});
      navigate("/session/1");
    }
  }
  
  return (
    <>
      <Card>
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input placeholder="password" type="password" />
        <Botao event={() => validateUser(email)} />
      </Card>
    </>
  );
};

export default Home;
