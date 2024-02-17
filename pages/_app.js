import "../styles/globals.css";
import Navbar from "../components/navbar/navbar";
import { Provider } from "../context";
// import { Provid } from "../Test_Context";
import { Prd } from "../context/userToken";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Prd>
          <Navbar />
          <div style={{ height: "60px" }}></div>
          <Component {...pageProps} />
        </Prd>
      </Provider>
    </>
  );
}

export default MyApp;
