import "@/src/styles/globals.css";
//components
import Header from "@/src/components/layout/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
