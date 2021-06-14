import React, {FC} from 'react';
import styles from '../styles/Index.module.scss';
import Head from 'next/head';

const Index: FC = () => (
  <>
    <Head>
      <meta name="description" content="A simple NextJS App"/>
      <title>My App</title>
    </Head>
    <div data-testid="index-pg" className={styles.indexFlex}>
      <img src="vercel.svg" alt="Vercel" data-testid="hero-img"/>
      <h1 data-testid="hero-txt">Welcome to your next app</h1>
    </div>
  </>
);

export default Index;
