import React, { useState } from "react";
import OneForm from "../component/Forms/OneForm";
import { useInput } from "../component/Hooks/useInput";
import axios from "axios";
import { placeHolder } from "../placeholer";

function Signup() {

    const signUpData = placeHolder[2];

    function validateEmail(elementValue){      
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue); 
    }

    let {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailonChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: emailResetHandler,

    } = useInput((value) => validateEmail(value));

    let {
        value: passwordValue,
        isValid: PasswordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordonChangeHandler,
        inputBlurHandler: passwordInputBlurHandler,
        reset: passwordResetHandler,

    } = useInput((value) => value.length >= 8);

    
    let inputDetails = [
        {
            id:1,
            htmlFor: "email",
            lable: "Enter your Email",
            inputVal: emailValue,
            onChange: emailonChangeHandler,
            placeholder: "enter your email",
            error: emailHasError,
            bulrHandler: emailInputBlurHandler,
            errorMessage: "email is required",
        },
        {
            id:2,
            htmlFor: "password",
            lable: "Enter your password",
            inputVal: passwordValue,
            onChange: passwordonChangeHandler,
            placeholder: "enter your password",
            error: passwordHasError,
            bulrHandler: passwordInputBlurHandler,
            errorMessage: "Password should be at least 8 char",
        },
    ];

    // signUpData.data.map(element => {
    //     inputDetails.push({
    //         id:element.id,
    //         htmlFor: element.inputName,
    //         lable: `Enter your ${element.inputName}`,
    //         inputVal: `${element.inputName}Value`,
    //         onChange: `${element.inputName}changeHandler`,
    //         placeholder: `Enter your ${element.inputName}`,
    //         error: `${element.inputName}hasError`,
    //         bulrHandler: `${element.inputName}InputBlurHandler`,
    //         errorMessage: `${element.errorMessage}`,
    //     })
    // });
    // console.log(signUpData)
    let signupFormIsValid = false;
    
    signupFormIsValid = emailIsValid && PasswordIsValid ? true : false;

    const signupFormHandler = async (e) => {
        e.preventDefault();
          // gurd condition
        if (!signupFormIsValid) return;

        const userSignUpdata = {
            email: emailValue,
            password: passwordValue,
        }

        try {
            await axios.post("/api/signup", userSignUpdata)            
            console.log(userSignUpdata);
        } catch (error) {
            console.log("someting wrong in signup Form" , error);
        }
        emailResetHandler();
        passwordResetHandler();
    }

    return (
        <OneForm inputDetails={inputDetails} formSumbitHandler={signupFormHandler}  />
    )
}

export default Signup;