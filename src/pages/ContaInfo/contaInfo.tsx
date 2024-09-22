import { useEffect, useState } from "react";
import CardInfo from "../../components/CardInfo/CardInfo";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../components/AppContext/AppContext";

interface user {
  email: string;
  senha: string;
  name: string;
  balance: number;
  id: string;
}


const ContaInfo = () => {
  const [userData, setUserData] = useState<null | user>();
  const {isLoggedIn} = useContext(AppContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    const getData = async () => {
      const data: any | user = await api;
      setUserData(data);
      console.log(data);
    };

    getData();
  }, []);

  if (!isLoggedIn) {
    navigate("/");
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
                <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`Email: ${userData.email}`} />
              </>
            )
        }
      </SimpleGrid>
    </Center>
  );
};
export default ContaInfo;
