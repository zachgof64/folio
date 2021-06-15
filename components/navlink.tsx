import React, {Component} from 'react';
import Link from 'next/link';
import styles from '../styles/navlink.module.scss';

interface NavLinkProps {
    href: string
}

class NavLink extends Component<NavLinkProps> {
  render() {
    return (
      <li className={styles.navLink}>
        <Link href={this.props.href}>{this.props.children}</Link>
      </li>
    );
  }
}

export default NavLink;
