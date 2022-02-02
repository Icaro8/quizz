import "../styles/globals.scss";
import AuthContextProvider from "../contexts/useLoginRegister";
import ContextResponse from "../contexts/useSetResponse";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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
