import "@/styles/globals.css";
//components
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
