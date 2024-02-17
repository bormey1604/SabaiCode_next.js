import { createContext, useState } from "react";

const UserToken = createContext();
const Prd = ({ children }) => {
  const [token, setToken] = useState("");
  return <UserToken.Provider value={{ setToken, token }}>{children}</UserToken.Provider>;
};
export { UserToken, Prd };
