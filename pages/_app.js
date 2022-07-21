import '../styles/globals.css';
import Layout from '../component/Layout/Layout';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
  
}

export default MyApp
