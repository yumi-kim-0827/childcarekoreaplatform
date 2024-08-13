import "@/src/styles/globals.css";
import "@/src/styles/custom.css";
import { PrimeReactProvider } from "primereact/api";
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
