import { useState } from 'react';
import { useRouter } from 'next/router';
import InputHtml from './inputHtml';
import styles from "./OneForm.module.scss";
import Button from '@mui/material/Button';

const OneForm = ({inputDetails , formSumbitHandler }) => {
    const router = useRouter()
    
    const activePage = router.pathname;
    
    const routerHandler = (currentPage) => {
        if (currentPage.includes("/login")) {
            router.push('/signup')
        }
        if (currentPage.includes("/signup")) {
            router.push('/login')
        }
    };


    return (
        <div className={styles.container}>
            <div >
                <div >
                    <div  onClick={() => routerHandler(activePage)}>
                        <h3 >SignUp</h3>
                        {activePage.includes("signup") && <span ></span>}
                    </div>
                    <div className='relative' onClick={() => routerHandler(activePage)}>
                        <h3>LogIn</h3>
                        {activePage.includes("login") && <span ></span>}
                    </div>
                </div>
            </div>
            <div >
                <form onSubmit={formSumbitHandler} >
                    <InputHtml inputDetails={inputDetails} />
                    <Button 
                        variant="contained"
                         type="submit"
                    >
                        {activePage.includes("/login") && "LogIn"}
                        {activePage.includes("/signup") && "SignUp"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default OneForm;