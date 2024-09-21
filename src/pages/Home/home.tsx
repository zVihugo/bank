import { Input } from "@chakra-ui/react";
import { Card } from "../../components/Card/Card";
import Botao from "../../components/Button/Button";
import { login } from "../../services/login/login";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Card>
        <h1>Bom dia</h1>
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input placeholder="password" type="password" />
        <Botao event={() => login(email)} />
      </Card>
    </>
  );
};

export default Home;
