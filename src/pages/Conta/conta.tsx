import { useEffect, useState } from "react";
import CardInfo from "../../components/CardInfo/CardInfo";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { api } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../components/AppContext/AppContext";

interface user {
  email: string;
  senha: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | user>();
  const actualData = new Date();
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const {isLoggedIn} = useContext(AppContext);

  useEffect(() => {
    const getData = async () => {
      const data: any | user = await api;
      setUserData(data);
      console.log(data);
    };

    getData();
  }, []);

  if (!isLoggedIn) {
    navigate("/auth");
  }

  if(userData && id !== userData.id){
    navigate("/auth")
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {
          userData === undefined || userData === null ?
            (<Center>
              <Spinner size="xl" color="white" />
            </Center>) :
            (
              <>
                <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                <CardInfo mainContent="Saldo" content={`${userData.balance}`} />
              </>
            )
        }
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
