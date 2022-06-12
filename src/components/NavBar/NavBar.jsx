import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  function handleToggle() {
    setNavbarOpen(prev => !prev)
  }

  return (
    <header className="primary-header flex">
      <div className="flex logo-head">
        <Link to='/'>
          <h2 className="title">Yomu</h2>
        </Link>
      </div>
      <button
        className="mobile-nav-toggle"
        onClick={handleToggle}>
      </button>
      <nav>
        <ul
          className="primary-nav underline-indicators flex"
          style={{ transform: navbarOpen ? 'translateX(100%)' : 'translateX(0%)' }}
        >
          <li className="ff-sans-cond uppercase text-white letter-spacing-2">
            <Link to='/'>
              <span>00</span>Home
            </Link>
          </li>
          <li className="ff-sans-cond uppercase text-white letter-spacing-2">
            <Link to="/books/search">
              <span>01</span>Search
            </Link>
          </li>
          <li className="ff-sans-cond uppercase text-white letter-spacing-2">
            <Link to="/watchlists">
              <span>02</span>Watchlist
            </Link>
          </li>
          <li className="ff-sans-cond uppercase text-white letter-spacing-2">
            <Link to="" onClick={handleLogOut}>
              <span>03</span>Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}