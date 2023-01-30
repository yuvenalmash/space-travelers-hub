import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/missions">Missions</NavLink>
    <NavLink to="/myProfile">My Profile</NavLink>
  </nav>
);

export default Nav;
