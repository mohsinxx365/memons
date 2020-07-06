import Head from "next/head";
import MuiSupplier from "../components/MuiSupplier";
import Navbar from "../components/Navbar";
import "../scss/index.scss";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
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
      <MuiSupplier>
        <Navbar />
        <Component {...pageProps} />
      </MuiSupplier>
    </React.Fragment>
  );
}
