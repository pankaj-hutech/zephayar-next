import '../styles/globals.css';
import Layout from '../component/Layout/Layout';
import React , {useState , useEffect} from 'react';
import { lightTheme, darkTheme } from "../styles/ThemeConfig";
import { GlobalStyles } from "../styles/GloableStyle";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  const [themeColor, setThemeColor] = useState("light");

  useEffect(() => {
    setThemeColor()
  }, [themeColor]);

  const themeToggler = () => {
    // console.log(themeColor);
    themeColor === 'light' ? setThemeColor('dark') : setThemeColor('light')
  }


 


  return (
    <ThemeProvider theme={themeColor === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout setThemeColor={setThemeColor}>
        <Component {...pageProps} />
      </Layout>
      <button
      onClick={() => themeToggler()}
      >ddd</button>
    </ThemeProvider>
  )
  
}

export default MyApp;
