import { createContext, useState } from "react";
import { useEffect } from "react";

interface ContextProp {
  children?: React.ReactNode;
  form1?: string | null;
  setForm1?: React.Dispatch<React.SetStateAction<string>>;
  formOne?: string;
  setFormOne?: React.Dispatch<React.SetStateAction<string>>;
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

  const [form1, setForm1]:any =useState(() =>
  localStorage.getItem("form")
    ? localStorage.getItem("form") || "one"
    : null
)
  const [formOne, setFormOne] = useState("one");
  //  localStorage.setItem('form',form1);

  // AUTHENTICATICATION
  const [user, setUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null
  );



  useEffect(() => {
    localStorage.setItem('form', form1);
  },[form1])





  //CONTEXT DATA
  const contextData: any = { user, form1, setForm1, formOne, setFormOne };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
