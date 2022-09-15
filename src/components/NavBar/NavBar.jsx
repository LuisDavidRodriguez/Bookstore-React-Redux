import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';

const NavBar = () => (
  <div className="navBar">
    <div>
      <h1>Bookstore</h1>
    </div>
    <div>
      <Link to="/Books" className="link">Books</Link>
      <Link to="/Categories" className="link">Categories</Link>
    </div>
  </div>
);

export default NavBar;
