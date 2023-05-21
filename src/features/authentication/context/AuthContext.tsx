import { createContext, useState } from "react";
import { useEffect } from "react";

interface ContextProp {
  children?: React.ReactNode;
  singleStoreState?: string | null;
  setSingleStoreState?: React.Dispatch<React.SetStateAction<string>>;
  multipleStoreState?: string;
  setMultipleStoreState?: React.Dispatch<React.SetStateAction<string>>;
}

//USER TYPE
// interface UserSchema {
//   user: {
//     id: string;
//     name: string;
//     email: string;
//     role: string;
//   };
// }

const AuthContext = createContext<ContextProp>(null!);
export default AuthContext;
export const AuthProvider = ({ children }: 
ContextProp) => {

  const [singleStoreState, setSingleStoreState]:any =useState(() =>
  localStorage.getItem("singleStore")
    ? localStorage.getItem("singleStore") || "one"
    : "one"
)
  const [multipleStoreState, setMultipleStoreState] = useState(() =>
  localStorage.getItem("multipleStore")
    ? localStorage.getItem("multipleStore") || "one"
    : "one"
);

  // AUTHENTICATICATION
  const [user, setUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null
  );


  useEffect(() => {
    if(localStorage.getItem("singleStore")){
    setSingleStoreState(`${localStorage.getItem("singleStore")}`);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("singleStore", singleStoreState);
  },[singleStoreState])


  useEffect(() => {
    if(localStorage.getItem("multipleStore")){
    setMultipleStoreState(`${localStorage.getItem("multipleStore")}`);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("multipleStore", multipleStoreState);
  },[multipleStoreState])


  //CONTEXT DATA
  const contextData: any = { user, singleStoreState, setSingleStoreState, multipleStoreState, setMultipleStoreState };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
