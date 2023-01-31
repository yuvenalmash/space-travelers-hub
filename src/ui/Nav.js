import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <header className="header">
    <nav>
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/myProfile">My Profile</NavLink>
    </nav>
  </header>
);

export default Nav;
