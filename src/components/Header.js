import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/payment">Payment</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;