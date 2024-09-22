import { createContext, useState } from "react";

interface IAppContextType {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContextType); 

export const AppContextProvider = ({children}: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const user = "Victor";

  return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn}}>
        {children}
      </AppContext.Provider>
  )
}