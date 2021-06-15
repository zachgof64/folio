import React, {Component} from 'react';
import Head from 'next/head';


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
