import "@/src/styles/globals.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
//components
import HeaderContainer from "@/src/components/header/HeaderContainer";
import SideBar from "@/src/components/sidebar/SideBar";

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
