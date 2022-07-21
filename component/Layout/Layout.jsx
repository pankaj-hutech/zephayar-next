import React from "react";
import Header from "../Header/index";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;