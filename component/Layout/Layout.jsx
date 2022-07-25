import React , {useState , useEffect} from "react";
import Header from "../Header/index";
import style from "./Laout.module.scss";
import { lightTheme, darkTheme } from "../../styles/ThemeConfig";
import { GlobalStyles } from "../../styles/GloableStyle";
import { ThemeProvider } from "styled-components";
import { createTheme } from '@mui/material/styles';

const Layout = (props) => {
  const [themeColor, setThemeColor] = useState("light");

  const themeToggler = () => {
      setThemeColor((prev) => prev === "light" ? "dark" : "light");
    }
    
    const theme = createTheme({
    palette: {
        secondary: {
        main: '#d50000'
        }
    }
    });
    
    return (
        <ThemeProvider theme={themeColor === "dark" ? lightTheme : darkTheme}>
            <GlobalStyles />
                <Header themeToggler={themeToggler}  />
                <main className={style.container}>
                    {props.children}
                </main>
        </ThemeProvider>
    );
};

export default Layout;