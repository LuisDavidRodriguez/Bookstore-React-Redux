import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';
import userIcon from './userIcon.png';

const NavBar = () => (
  <div className={styles.navBar}>
    <div>
      <h1 className={styles.title}>Bookstore</h1>
    </div>
    <div className={styles.linkContainer}>
      <Link to="/Books" className={styles.link}>Books</Link>
      <Link to="/Categories" className={styles.link}>Categories</Link>
      <img src={userIcon} className={styles.userIcon} alt="User icon" />
    </div>
  </div>
);

export default NavBar;
