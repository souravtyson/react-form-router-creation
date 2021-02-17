import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="link__style">
        <Link to="/">
          <li> About </li>
        </Link>
        <Link to="/contact">
          <li> Contact </li>
        </Link>
        <Link to="/form">
          <li> Form </li>
        </Link>
        <Link to="/shop">
          <li> Shop </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
