import { GlobalStyles } from '@bigcommerce/big-design';
import type { AppProps } from 'next/app'
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <GlobalStyles />
        <Component {...pageProps} /> 
    </>
 );
  
 export default MyApp; 