import {Button , Grid } from '@mui/material';
import Link from 'next/link'


const Buttons = ({ type, variant, color, fullWidth, title, sm, xs , sx , link}) => {
    
    return (
        <Grid item sm={sm || ""} xs={xs || ""} sx={sx}  >
            <Link href={link || ""}>
                <Button
                    variant={variant}   
                    color={color}
                    type={type || "button"}
                    fullWidth={fullWidth || null}    
                >
                    {title || ""}
                </Button>
            </Link>
        </Grid>
    );
}

export default (Buttons);