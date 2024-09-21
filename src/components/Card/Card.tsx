import { useState } from "react";
import { Input, Box } from "@chakra-ui/react";
import Botao from "../Button/Button";
import { login } from "../../services/login/login";

export const Card = () => {
  const [email, setEmail] = useState("");

  return (
    <Box backgroundColor="#ffffff" borderRadius="25px" padding="15px">
      <h1>Bom dia</h1>
      <Input
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input placeholder="password" type="password" />
      <Botao event={() => login(email)} />
    </Box>
  );
};
