import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Informações da Conta
      </Text>
      <Link to="/session/1">
        <Text fontSize="3xl" fontWeight="bold">
          Ir para a conta
        </Text>
      </Link>
    </>
  );
};
export default ContaInfo;
