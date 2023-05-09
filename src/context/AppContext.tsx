import { createContext, useContext, useState } from "react";
import AuthContext from "../features/authentication/context/AuthContext";

interface ContextProp {
  children?: React.ReactNode;
  storeType?: string;
  setStoreType?: React.Dispatch<React.SetStateAction<string>>;
  loginOption?: string;
  setLoginOption?: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<ContextProp>(null!);
export default AppContext;
export const AppProvider = ({ children }: ContextProp) => {
  const { user }: any = useContext(AuthContext);
  //STATES
  // User selects store
  const [storeType, setStoreType] = useState("");
  //login options(email or username)
  const [loginOption, setLoginOption] = useState("email");

  //CONTEXT DATA
  const contextData: any = {
    //User from auth context
    user,
    //storetype info
    storeType,
    setStoreType,
    //login
    loginOption,
    setLoginOption,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
