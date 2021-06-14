import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import React from 'react';

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
