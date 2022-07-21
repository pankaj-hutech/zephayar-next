import Image from "next/image";
import styles from "./slider.module.scss";
import { useState } from "react";
import {MdArrowBackIosNew , MdArrowForwardIos}  from "react-icons/md";

const Slider = ({ sliderData }) => {
    const [counter , setCounter] = useState(0)

    const { componentName, data } = sliderData;
    
    if (componentName !== "slider") return;


    return (
        <>
            <div className={styles.container}>
                <div className={styles.swiperWrapper}>
                    {data.map((slide, idx) => (
                        <div className={styles.imageWrapper}
                            >
                            <Image 
                                src={slide.image}
                                alt={slide.title}
                                height={"600px"}
                                width={"1000px"}
                                layout="fixed"
                            />
                        </div>
                    ))}
                </div>
                <MdArrowBackIosNew
                    className={styles.leftArrow} />
                <MdArrowForwardIos
                    className={styles.rightArrow} />
            </div>    
        </>
    )
}

export default Slider;