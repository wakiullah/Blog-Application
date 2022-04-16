import { useEffect } from "react";
// import "@/styles/404.css";
import "@/styles/globals.css";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    document.querySelector("body").classList.add("font-tessan");
  });
  if (Component.getLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
