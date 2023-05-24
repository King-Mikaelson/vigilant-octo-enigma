import { createContext, useReducer, useState, useContext } from "react";
import { useEffect } from "react";
import AuthService from "../../../lib/authData";
import { AuthContextProp, Values } from "../../../types";
import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

let fullnameR: string | undefined;
let usernameR: string | undefined;
let emailR: string | undefined;

const AuthContext = createContext<AuthContextProp>(null!);
export default AuthContext;
export const AuthProvider = ({ children }: AuthContextProp) => {
  // AUTHENTICATICATION
  const [user, setUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null
  );
  const navigate = useNavigate();
  //General loading and error state
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  console.log(loading);
  //Formik values
  const initialValues: any = {
    email: "",
    userName: "",
    fullName: "",
  };
  const submitForm = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    fullnameR = values.fullName;
    usernameR = values.userName;
    emailR = values.email;
    console.log("values", values);
    setSingleStoreState?.("two");
  };

  //Info from form two
  const [value, setValue] = useState<string>();
  const [businessName, setBusinessName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //Sign Up function
  const registerUser = async () => {
    const resData = {
      business_address: "udorji",
      business_name: businessName,
      mode: "SINGLE STORE",
    };
    const userData = {
      email: emailR,
      username: usernameR,
      full_name: fullnameR,
      phone_number: value,
      role: "admin",
      password,
      works_at: businessName,
    };

    try {
      const result1 = await AuthService.createRestaurant("", resData);
      const result2 = await AuthService.createUser(userData);
      const result3 = await AuthService.sendOTP(emailR!);
      navigate("/otp");
      // Handle the results as needed
      console.log(result1, result2, result3);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  //Verify Otp
  // const { setOtpState } = useContext(AppContext);
  const verifyOtp = async (email: string, user_otp: string) => {
    try {
      const response = await AuthService.verifyOTP(email, user_otp);

      // Handle the results as needed
      navigate("/");
      console.log(response);
      if (response.ok) {
        console.log("verified");
      }
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  //Login User
  // const { setOtpState } = useContext(AppContext);
  const loginUser = async (email: string, password: string) => {
    try {
      const response = await AuthService.loginUser(email, password);
      setLoading(true);
      // Handle the results as needed
      if (response) {
        const decodedToken = jwtDecode(response);
        console.log("login response", decodedToken);
        setLoading(false);
        setUser(decodedToken);
        localStorage.setItem("user", JSON.stringify(decodedToken));
        localStorage.setItem("tokenStr", response);

        navigate("/dashboard");
      }
    } catch (error) {
      // Handle any errors
      setLoading(false);
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

  // This code here is updating the local storage with the single store state
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
    initialValues,
    submitForm,
    value,
    setValue,
    businessName,
    setBusinessName,
    password,
    setPassword,
    emailR,
    verifyOtp,
    loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
