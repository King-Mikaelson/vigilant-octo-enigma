import { createContext, useState } from "react";

interface ContextProp {
  children?: React.ReactNode;
}

//USER TYPE
interface UserSchema {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

const AuthContext = createContext<ContextProp>(null!);
export default AuthContext;
export const AuthProvider = ({ children }: ContextProp) => {
  //LOCAL STORAGE TYPES
  function identity<T>(arg: T): T {
    return arg;
  }

  function setTypedStorageItem<T extends keyof UserSchema>(
    key: T,
    value: UserSchema[T]
  ): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function getTypedStorageItem<T extends keyof UserSchema>(
    key: T
  ): UserSchema[T] | null {
    return JSON.parse(localStorage.getItem(key) || "") as UserSchema[T];
  }

  // AUTHENTICATICATION
  const [user, setUser] = useState(() => getTypedStorageItem("user"));
  //CONTEXT DATA
  const contextData: any = { user };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
