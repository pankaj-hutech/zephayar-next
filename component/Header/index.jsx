import React ,{ useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { placeHolder } from "../../placeholer";
import Link from 'next/link';
import { MdExpandMore } from "react-icons/md";
import Buttons from "../Buttons/Buttons";
import { MaterialUISwitch } from "./themeSwitch";
import FormControlLabel from "@mui/material/FormControlLabel";

const Header = ({ themeToggler }) => {

    let { componentName, componentDisplayName, data } = placeHolder[0];
    
    useEffect(() => {
         componentName, componentDisplayName, data
    }, []);


    return (
        <div className={styles.container}>
            <header className={styles.header} style={{backgroundColor : data.bgColor , color: data.textColor || "red"}}>
                {componentName === "header" &&
                    <div className={styles.container}>
                        {data.logo.image &&
                            <div className={styles.logo}>
                                <h2>
                                    <Link href={"/"}>
                                        {data.logoName}
                                    </Link>
                                </h2>
                            </div>
                        }
                        {data.headerNameItem &&
                            <nav>
                                {data?.headerNameItem &&
                                    <ul className={styles.level1}>
                                        {data?.headerNameItem.map((elem, idx) => (
                                            <li key={idx}>
                                                <Link href={elem.link}>
                                                    {elem.nestItem.length > 1 ?
                                                        <span>
                                                            <a>{elem.title}</a>
                                                            <MdExpandMore />
                                                        </span>
                                                        : <a>{elem.title}</a>
                                                    }
                                                </Link>
                                                {elem.nestItem.length >= 1 &&
                                                    <ul className={styles.level2}
                                                    >
                                                        {elem.nestItem.map((sumElems, idx) => (
                                                            <li
                                                            >
                                                                <Link href={sumElems.link}>
                                                                    {sumElems.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                }
                                {data.buttons &&
                                    data.buttons.map((btn => (
                                        <Buttons
                                            type={btn?.type}
                                            title={btn?.title}
                                            color={btn?.color}
                                            fullWidth={btn?.fullWidth}
                                            sm={btn?.sm}
                                            xs={btn?.xs}
                                            variant={btn?.variant}
                                            sx={btn?.sx}
                                            link={btn?.link}
                                        />
                                    ))    
                                )}
                                <FormControlLabel onClick={() => themeToggler()} control={<MaterialUISwitch />} />
                            </nav>
                        }
                    </div>
                }
            </header>
        </div>
    );
};

export default Header;

// <Image
//     src={item.data.logo.image.smallUrl}
//     alt={item.data.logo.image.alt}
//     width={"210px"}
//     height={"50px"}
// />