import Link from "next/link";
import style from "./button.module.scss";
import { useRouter } from 'next/router'

const Buttons = ({ data }) => {
    
    const router = useRouter();

    const handleClick = (e) => {
        router.push(e)
    }

    console.log(data);
    return (
        <div className={style.container}>
            {data.map((btn, idx) => (
                <Link href={btn.link}>
                <button
                    className={btn.style === "filled" ? `${style.filled}` : `${style.transparent}`}
                >
                    {btn.title}
                    </button>
                </Link>
            ))}
        </div>
    );
}

export default Buttons;