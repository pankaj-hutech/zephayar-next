import React from "react";

const InputHtml = ({inputDetails}) => {
    return (
        <React.Fragment>
            {inputDetails?.map((field, idx) => (
                <div  key={field.id}>
                    <label htmlFor={field.htmlFor} >
                        {field.lable}
                    </label>
                    <input
                        placeholder={field.placeholder} value={field.inputVal}
                        onChange={(e) => field.onChange(e.target.value)}
                        onBlur={field.bulrHandler}
                         type={field.htmlFor} />
                    {field.error && <p >{field.errorMessage}</p>}
                </div>
            ))
            }
        </React.Fragment>
    )
}

export default InputHtml;