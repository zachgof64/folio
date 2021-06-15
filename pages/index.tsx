/* eslint-disable react/no-unescaped-entities */
import React, {FC} from 'react';
import Layout from '../components/layout';
import Section from '../components/section';
import styles from '../styles/index.module.scss';

const Index: FC = () => (
  <Layout nav>
    <div className={styles.hero}>
      <img src="img/code.jpg" alt="hero image" className={styles.heroImg}/>
      <h1 className={styles.heroTxt}>Zachary Goff-Hodges</h1>
      <h2 className={styles.heroTyping}>Your next Full Stack Web Developer</h2>
    </div>
    <div className={styles.ctnr}>
      <Section className={styles.sectAbout}>
        <article className={styles.aboutArticle}>
          Hello, I'm Zach. I'm a Full Stack Web Developer with experience in Go,
          React/Next, Java, Javascript/Typescript, and SQL Databases.
          Since I was 15 I always loved coding if I need something
          done and I couldn't find someone who did it would do it.
          I Will be glad to join some people like me. Hope to hear from you
          soon.
        </article>
      </Section>
    </div>
  </Layout>
);

export default Index;
