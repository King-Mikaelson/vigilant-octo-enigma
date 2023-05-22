import { State } from "./features/authentication/context/Reducer";
import { FormikHelpers } from "formik";
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
  children?: React.ReactNode;
  singleStoreState?: string | null;
  setSingleStoreState?: React.Dispatch<React.SetStateAction<string>>;
  multipleStoreState?: string;
  setMultipleStoreState?: React.Dispatch<React.SetStateAction<string>>;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  errMsg?: string;
  setErrMsg?: React.Dispatch<React.SetStateAction<string>>;
  state?: State;
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
}

export interface UserListProps {
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  action: string;
}
