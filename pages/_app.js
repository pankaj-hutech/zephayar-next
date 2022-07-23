import '../styles/globals.css';
import Layout from '../component/Layout/Layout';
import React , {useState , useEffect} from 'react';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;
