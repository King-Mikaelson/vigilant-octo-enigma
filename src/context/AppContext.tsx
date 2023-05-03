import { createContext, useContext, useState } from "react";
import AuthContext from "../features/authentication/context/AuthContext";

interface ContextProp {
  children?: React.ReactNode;
  storeType?: string;
  setStoreType?: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<ContextProp>(null!);
export default AppContext;
export const AppProvider = ({ children }: ContextProp) => {
  const { user }: any = useContext(AuthContext);
  //STATES
  const [storeType, setStoreType] = useState("");

  //CONTEXT DATA
  const contextData: any = { user, storeType, setStoreType };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};