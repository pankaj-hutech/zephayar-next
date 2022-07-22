import React, { useState } from "react";

 export const useInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState("");
    const [isTouch , setIsTouch] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouch;

    const valueChangeHandler = (e) => {
        setEnteredValue(e);
    }

    const inputBlurHandler = () => {
        setIsTouch(true);
    }

    const reset = () => {
        setIsTouch(false);
        setEnteredValue("")
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }

}
