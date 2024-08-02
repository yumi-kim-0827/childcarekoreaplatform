import "@/src/styles/globals.css";
import "@/src/styles/main.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
//components
import HeaderContainer from "@/src/components/header/HeaderContainer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PrimeReactProvider>
        <HeaderContainer />
        <Component {...pageProps} />
      </PrimeReactProvider>
    </>
  );
}
