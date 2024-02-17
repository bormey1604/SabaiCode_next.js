import { createContext } from "react";

const TestContext = createContext();
const Provid = ({ children }) => {
  return <TestContext.Provider value={10}>{children}</TestContext.Provider>;
};
export { TestContext, Provid };
