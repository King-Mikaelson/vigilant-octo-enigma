import { createContext, useContext, useState } from "react";
import AuthContext from "../features/authentication/context/AuthContext";
import { Dayjs } from "dayjs";
import { AppContextProp } from "../types";
import AuthService from "../lib/authData";

const AppContext = createContext<AppContextProp>(null!);
export default AppContext;
export const AppProvider = ({ children }: AppContextProp) => {
  const { user, emailR }: any = useContext(AuthContext);
  //STATES
  // User selects store
  const [storeType, setStoreType] = useState("");
  //login options(email or username)
  const [loginOption, setLoginOption] = useState("email");
  //otp screens conditional render
  const [otpState, setOtpState] = useState("");
  // UseState for choosing a From and To Date in the Individual Reports
  const [generalReportFromDate, setGeneralReportFromDate] =
    useState<Dayjs | null>(null);
  const [generalReportToDate, setGeneralReportToDate] = useState<Dayjs | null>(
    null
  );
  const [individualReportFromDate, setIndividualReportFromDate] =
    useState<Dayjs | null>(null);
  const [individualReportToDate, setIndividualReportToDate] =
    useState<Dayjs | null>(null);

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
    generalReportFromDate,
    setGeneralReportFromDate,
    generalReportToDate,
    setGeneralReportToDate,
    individualReportFromDate,
    setIndividualReportFromDate,
    individualReportToDate,
    setIndividualReportToDate,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
