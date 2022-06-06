import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <ul>
        <li><span>Welcome, {user.name}</span></li>
        <li>
          <Link to='/'>
            <span>00</span>Home
          </Link>
        </li>
        <li>
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}