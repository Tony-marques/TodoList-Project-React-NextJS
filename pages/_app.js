import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        limit={2} // 2 notifications max à l'écran
        pauseOnFocusLoss={false} // pas de pause quand on perd le focus
        autoClose={2000} // ferme au bout de 2 sec
      />
    </>
  );
}

export default MyApp;
