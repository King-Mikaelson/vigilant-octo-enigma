import { createContext, useState } from "react";

interface ContextProp {
  children?: React.ReactNode;
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
export const AuthProvider = ({ children }: ContextProp) => {
  // AUTHENTICATICATION
  const [user, setUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null
  ); //CONTEXT DATA
  const contextData: any = { user };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
