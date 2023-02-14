import Footer from "components/Footer";
import "styles/globals.css";
import { ThemeProvider } from "styled-components";
import "styles/layout.css"
import Head from "next/head";
import Header from 'components/Header';
import Navbar from './../components/Navbar';
import "../components/Navbar.css"


const theme = { 
  colors: {
    primary: "#355c7d",
    secondary: "red",
  },
};

export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
  <>
  
  <Head>
    <title>CodeEvolution</title>
    <meta name='description' content='Best channel to learn React JS' />
  </Head>
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>

  );
}
