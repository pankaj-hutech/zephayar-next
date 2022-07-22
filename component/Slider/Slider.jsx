import Image from "next/image";
import styles from "./slider.module.scss";
import { useState } from "react";
import {MdArrowBackIosNew , MdArrowForwardIos}  from "react-icons/md";

const Slider = ({ sliderData }) => {
    const { componentName, data } = sliderData;
    if (componentName !== "slider") return;
    const [index, setActiveStep] = useState(0);
    const dataSize = data.length;

    const goToNextPicture = () => {
        if (index < dataSize - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    
    };
    
    const goToPrevPicture = () => {
        console.log(index)
        if (index > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };


    const ani = `@keyframes sliderAnimation {
                0% { transform: translateX(0%)};
                10% { transform: translateX(-20%)};
                30% { transform: translateX(-40%)};
                50% { transform: translateX(-60%)};
                60% { transform: translateX(-80%)};
                100% {transform: translateX(-100%)};
    }`
    // {animation: `${ani} 4s linear alternate`}

    return (
        <>
            <div className={styles.container}>
                <div className={styles.swiperWrapper}>
                    
                    <div className={styles.imageWrapper}
                          
                        >
                        <Image 
                            src={data[index]?.image}
                            alt={data[index]?.title}
                        />
                    </div>
                 
                </div>
                <MdArrowBackIosNew
                    className={styles.leftArrow}
                    onClick={() => goToPrevPicture()}
                />
                <MdArrowForwardIos
                    className={styles.rightArrow}
                     onClick={() =>goToNextPicture()}
                />
                
            </div>    
        </>
    )
}

export default Slider;