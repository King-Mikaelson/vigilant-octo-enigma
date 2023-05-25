import { createContext, useContext, useState } from "react";
import AuthContext from "../features/authentication/context/AuthContext";
import { Dayjs } from "dayjs";
import { AppContextProp } from "../types";
import AuthService from "../lib/authData";

interface ContextProp {
  children?: React.ReactNode;
  storeType?: string;
  setStoreType?: React.Dispatch<React.SetStateAction<string>>;
  loginOption?: string;
  setLoginOption?: React.Dispatch<React.SetStateAction<string>>;
  otpState?: string;
  setOtpState?: React.Dispatch<React.SetStateAction<string>>;
  generalReportFromDate?: Dayjs | null;
  generalReportToDate?: Dayjs | null;
  setGeneralReportFromDate?: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  setGeneralReportToDate?: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  individualReportFromDate?: Dayjs | null;
  individualReportToDate?: Dayjs | null;
  setIndividualReportFromDate?: React.Dispatch<
    React.SetStateAction<Dayjs | null>
  >;
  setIndividualReportToDate?: React.Dispatch<
    React.SetStateAction<Dayjs | null>
  >;
  openAddItem?: boolean;
  setOpenAddItem?: React.Dispatch<React.SetStateAction<boolean>>;
}

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
  const [openAddItem, setOpenAddItem] = useState<boolean>(false);
  const [openDashboardContent, setOpenDashboardContent] =
    useState<boolean>(false);
  const [openMobileNavMenu, setOpenMobileNavMenu] = useState<boolean>(false);

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
    openAddItem,
    setOpenAddItem,
    openDashboardContent,
    setOpenDashboardContent,
    openMobileNavMenu,
    setOpenMobileNavMenu,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
