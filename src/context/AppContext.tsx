import { createContext, useContext, useState } from "react";
import AuthContext from "../features/authentication/context/AuthContext";
import { Dayjs } from "dayjs";


interface ContextProp {
  children?: React.ReactNode;
  storeType?: string;
  setStoreType?: React.Dispatch<React.SetStateAction<string>>;
  loginOption?: string;
  setLoginOption?: React.Dispatch<React.SetStateAction<string>>;
  otpState?: string;
  setOtpState?: React.Dispatch<React.SetStateAction<string>>;
  value?:Dayjs | null,
  value1?:Dayjs | null,
  setValue?: React.Dispatch<React.SetStateAction<Dayjs | null>>,
  setValue1?:React.Dispatch<React.SetStateAction<Dayjs | null>>
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
  //otp screens conditional render
  const [otpState, setOtpState] = useState("");
  // UseState for choosing a From and To Date in the Individual Reports
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);


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
    //otp
    otpState,
    setOtpState,
    value,
    setValue,
    value1,
    setValue1
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};