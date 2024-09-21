import { createContext } from "react";


interface IAppContextType {
  user: string;
  isLoggedIn: boolean;
}

export const AppContext = createContext({} as IAppContextType); 

export const AppContextProvider = ({children}: any) => {
  const user = "Victor";
  const isLoggedIn = false;
  return (
      <AppContext.Provider value={{ user, isLoggedIn }}>
        {children}
      </AppContext.Provider>
  )
}