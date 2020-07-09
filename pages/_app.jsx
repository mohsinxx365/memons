import Head from "next/head";
import Navbar from "../components/Navbar";
import Supplier from "../components/Supplier";
import { useEffect } from "react";
import "../scss/index.scss";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Memons</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Supplier>
        <Navbar />
        <Component {...pageProps} />
      </Supplier>
    </React.Fragment>
  );
}
