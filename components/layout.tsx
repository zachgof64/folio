import React, {Component} from 'react';
import NavBar from './navbar';
import Head from 'next/head';
import NavLink from './navlink';
import styles from '../styles/layout.module.scss';


interface LayoutProps {
    nav?: boolean
}

class Layout extends Component<LayoutProps> {
  render(): JSX.Element {
    if (this.props.nav) {
      return (
        <>
          <Head>
            <meta name="description" content="A Jr. Developer's portfolio."/>
            <title>Zach G. - Folio</title>
          </Head>
          <header className={styles.header}>
            <NavBar>
              {/* <NavLink href="#about">
                About
              </NavLink> */}
              <NavLink href="/contact">
                Contact
              </NavLink>
            </NavBar>
          </header>
          <main>
            {this.props.children}
          </main>
        </>
      );
    } else {
      return (
        <>
          <main>
            {this.props.children}
          </main>
        </>
      );
    }
  }
}

export default Layout;
