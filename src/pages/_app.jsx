import "../styles/globals.scss";
import ContextResponse from "../contexts/useSetResponse";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "../contexts/useLoginRegister";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ContextResponse>
        <Component {...pageProps} />
      </ContextResponse>
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default MyApp;
