import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <header className="header">
    <nav>
      <NavLink activeClassname="" to="/">
        Rockets
      </NavLink>
      <NavLink activeClassname="" to="/missions">
        Missions
      </NavLink>
      <NavLink activeClassname="" to="/myProfile">
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default Nav;
