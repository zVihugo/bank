import {Button} from "@chakra-ui/react";

interface IButton{
    event: () => void
}

const Botao = ({event}: IButton) => {
  return (
    <Button colorScheme="teal" size="sm" width="100%" marginTop="5px" onClick={event}>Acessar</Button>
  )
}

export default Botao