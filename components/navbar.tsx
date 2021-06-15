import React, {Component, PropsWithChildren} from 'react';
import styles from '../styles/navbar.module.scss';

class NavBar extends Component<PropsWithChildren<any>> {
  render() {
    return (
      <nav className={styles.topNav}>
        <ul className={styles.navList}>
          {this.props.children}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
