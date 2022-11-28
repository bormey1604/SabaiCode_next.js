import "../styles/globals.css";
import Navbar from "../components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div style={{ height: "60px" }}></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
