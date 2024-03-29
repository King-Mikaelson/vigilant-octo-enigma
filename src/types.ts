import { FormikHelpers } from "formik";
import { Dayjs } from "dayjs";

//LAYOUT TYPE
export type ChildrenProp = {
  children: React.ReactNode;
};

export interface Values {
  email?: string;
  userName?: string;
  fullName?: string;
}

export interface AuthContextProp {
  user?: any;
  children?: React.ReactNode;
  singleStoreState?: string | null;
  setSingleStoreState?: React.Dispatch<React.SetStateAction<string>>;
  multipleStoreState?: string;
  setMultipleStoreState?: React.Dispatch<React.SetStateAction<string>>;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  errMsg?: string;
  setErrMsg?: React.Dispatch<React.SetStateAction<string>>;
  handleUserInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  registerUser?: () => Promise<void>;
  dispatch?: React.Dispatch<any>;
  initialValues?: Values | any;
  value?: string | undefined;
  setValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  businessName?: string;
  setBusinessName?: React.Dispatch<React.SetStateAction<string>>;
  password?: string | undefined;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
  submitForm?: ((
    values: Values,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>) &
    ((values: Values) => void);
  verifyOtp?: (email: string, user_otp: string) => Promise<void>;
  loginUser?: (email: string, password: string) => Promise<void>;
  logout?: () => void;
}

export interface AppContextProp {
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

  allItems?: never[];
  activeCategory?: string;
  setActiveCategory?: React.Dispatch<React.SetStateAction<string>>;
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  state?: any;
  dispatch?: React.Dispatch<any>;
  transformItems?: (items: any) => any;
  openAddItem?: boolean;
  setOpenAddItem?: React.Dispatch<React.SetStateAction<boolean>>;
  openDashboardContent?: boolean;
  setOpenDashboardContent?: React.Dispatch<React.SetStateAction<boolean>>;
  openMobileNavMenu?: boolean;
  setOpenMobileNavMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserListProps {
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  action: string;
}
