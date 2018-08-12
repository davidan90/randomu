import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => (
  <nav className='navbar'>
    <ul>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  </nav>
);
