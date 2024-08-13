import "@/src/styles/globals.scss";
import "@/src/styles/custom.scss";
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
