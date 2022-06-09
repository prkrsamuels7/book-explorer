import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <ul className="primay-nav underline-indicators flex">
        <li>
          <Link to='/'>
            <span>00</span>Home
          </Link>
        </li>
        <li>
          <Link to="/books/search">
            <span>01</span>Search Books
          </Link>
        </li>
        <li>
          <Link to="/watchlists">
            <span>02</span>Watchlist
          </Link>
        </li>
        <li>
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}