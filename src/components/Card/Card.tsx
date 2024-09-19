// interface ICard {
//   event: ( )
// }

//Importando o chakraProvider
import { ChakraProvider, Input, Box} from "@chakra-ui/react";

//Importando components
import Botao from "../Button/Button"
import { login } from "../../services/login/login";


export const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" background="#000" padding="25px">
        <Box backgroundColor="#ffffff" borderRadius="25px" padding="15px">
          <h1>Faça o login:</h1>
          <Input placeholder="email" type="email"/>
          <Input placeholder="password" type="password"/>
          <Botao event={login}/>
        </Box>
      </Box>
    </ChakraProvider>
  )
}
