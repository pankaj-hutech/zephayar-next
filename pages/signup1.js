import React  from "react";
import { useForm } from "react-hook-form";
import Form from "../component/Forms/Forms";
import {Button , Container , Grid   , Box, TextField  , Typography} from '@mui/material';
import { placeHolder } from "../placeholer";
import Buttons from "../component/Buttons/Buttons";
import { useState } from "react";

function signup1() {

    const initVal = []

    let [val, setValue] = useState(initVal);
    const data = placeHolder[2]

    data?.fields?.forEach((obj , idx) => {
        initVal.push({id : obj?.id , valName : obj?.name})
    })

    let onChangeHandler = (e, value) => {
        console.log(e.target.value);

        console.log(value , "id");
        console.log(val);
    }
   

    return (
        <Container maxWidth={"sm"} className="form">
            {data.fields.map((input, idx) => (
                <Grid xs={input.xs} sm={input.sm} item>
                    <Box sx={{ my: 3}}>
                    <TextField
                        {...input}
                        onChange={(e) => onChangeHandler(e,input.id)}
                    />
                    </Box>
                </Grid>   
            ))}
            {data.buttons && 
                data.buttons.map((btn) => (
                    <Buttons
                        type={btn?.type}
                        title={btn?.title}
                        color={btn?.color}
                        variant={btn?.variant}   
                        sm={4}
                        xs={6}
                        link={btn?.link}
                    />
                ))
            }

        </Container>
    )
}


export default signup1;