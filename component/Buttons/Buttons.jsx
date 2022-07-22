import Link from "next/link";
import style from "./button.module.scss";
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

const Buttons = ({ data }) => {
    
    const router = useRouter();

    const handleClick = (e) => {
        router.push(e)
    }

    return (
        <div className={style.container}>
            {data.map((btn, idx) => (
                <Link href={btn.link}>
                <Button
                    variant={btn.style == "filled" ? "contained" : "outlined"}   
                    color={btn.style == "filled" ? "primary" : "secondary"}
                >
                    {btn.title}
                    </Button>
                </Link>
            ))}
        </div>
    );
}

export default Buttons;