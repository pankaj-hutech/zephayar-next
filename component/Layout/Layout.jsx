import React from "react";
import Header from "../Header/index";
import style from "./Laout.module.scss";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header  />
            <main className={style.container}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;