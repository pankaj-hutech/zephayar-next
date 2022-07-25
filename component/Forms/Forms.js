import React from 'react';
import { useForm } from 'react-hook-form';
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import FormHelperText from "@mui/material/FormHelperText"
import Input from "@mui/material/Input"
import TextField from "@mui/material/TextField"
import Container  from '@mui/material/Container';

// Reusable Form Component
function Form() {

    return (
        <Container >
            <FormControl>
              
                <TextField
                    id="filled"
                    label="Email"
                />  
                <TextField
                    id="filled"
                    label="Email"
                /> 
            </FormControl>
        </Container>
    );
}

//  <TextField id="standard-basic" label="Standard" variant="standard" />
//                 <InputLabel htmlFor="my-input">Email address</InputLabel>
//                 <Input id="my-input" aria-describedby="my-helper-text" />
//                 <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>


export default Form;