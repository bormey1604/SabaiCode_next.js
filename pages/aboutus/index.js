import { useContext } from "react";
import { TestContext } from "../../Test_Context";

const Aboutus = () => {
  const value = useContext(TestContext);
  return <h1>{value}</h1>;
};

export default Aboutus;
