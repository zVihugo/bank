import {Button} from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IButton{
    event: MouseEventHandler
}

const Botao = ({event}: IButton) => {
  return (
    <Button colorScheme="teal" size="sm" width="100%" marginTop="5px" onClick={event}>Acessar</Button>
  )
}

export default Botao