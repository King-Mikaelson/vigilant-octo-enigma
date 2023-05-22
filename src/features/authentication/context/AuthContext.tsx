import { createContext, useReducer, useState } from "react";
import { useEffect } from "react";
import AuthService from "../../../lib/authData";
import { initialState, reducer } from "./Reducer";
import { AuthContextProp, Values } from "../../../types";
import { FormikHelpers } from "formik";

const AuthContext = createContext<AuthContextProp>(null!);
export default AuthContext;
export const AuthProvider = ({ children }: AuthContextProp) => {
  // AUTHENTICATICATION
  const [user, setUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null
  );
  //General loading and error state
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  //Formik values
  const initialValues: any = {
    email: "",
    userName: "",
    fullName: "",
  };
  const submitForm = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    dispatch?.({ type: "SET_FULL_NAME", payload: values.fullName });
    dispatch?.({ type: "SET_USERNAME", payload: values.userName });
    dispatch?.({ type: "SET_EMAIL", payload: values.email });
    console.log("state", state);
    setSingleStoreState?.("two");
  };

  //Info from form two
  const [value, setValue] = useState<string>();
  const [businessName, setBusinessName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //User Sign Up
  const [state, dispatch] = useReducer(reducer, initialState);
  //Sign Up function
  const registerUser = async () => {
    const {
      fullname,
      username,
      email,
      phone_number,
      business_name,
      business_address,
      password,
    } = state;
    const resData = {
      business_address: "udorji",
      business_name,
      mode: "SINGLE STORE",
    };
    const userData = {
      email,
      username,
      full_name: fullname,
      phone_number,
      role: "admin",
      password,
      works_at: business_name,
    };

    try {
      const result1 = await AuthService.createRestaurant("", resData);
      const result2 = await AuthService.createUser(userData);
      const result3 = await AuthService.sendOTP(state.email);

      // Handle the results as needed
      console.log(result1, result2, result3);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  const [singleStoreState, setSingleStoreState]: any = useState(() =>
    localStorage.getItem("singleStore")
      ? localStorage.getItem("singleStore") || "one"
      : "one"
  );
  const [multipleStoreState, setMultipleStoreState] = useState(() =>
    localStorage.getItem("multipleStore")
      ? localStorage.getItem("multipleStore") || "one"
      : "one"
  );

  useEffect(() => {
    if (localStorage.getItem("singleStore")) {
      setSingleStoreState(`${localStorage.getItem("singleStore")}`);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("singleStore", singleStoreState);
  }, [singleStoreState]);

  useEffect(() => {
    if (localStorage.getItem("multipleStore")) {
      setMultipleStoreState(`${localStorage.getItem("multipleStore")}`);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("multipleStore", multipleStoreState);
  }, [multipleStoreState]);

  //CONTEXT DATA
  const contextData: any = {
    user,
    singleStoreState,
    setSingleStoreState,
    multipleStoreState,
    setMultipleStoreState,
    loading,
    errMsg,
    setLoading,
    setErrMsg,
    registerUser,
    state,
    dispatch,
    initialValues,
    submitForm,
    value,
    setValue,
    businessName,
    setBusinessName,
    password,
    setPassword,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
