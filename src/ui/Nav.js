import { NavLink } from 'react-router-dom';
import './Nav.css';
import planetImg from '../images/planet(1).png';

const Nav = () => (
  <header className="header">
    <div className="header-container">
      <img src={planetImg} alt="planet" className="planet-img" />
      <h1>Space Travelers Hub</h1>
    </div>
    <nav className="nav__list">
      <NavLink className="nav__link" to="/">
        Rockets
      </NavLink>
      <NavLink className="nav__link" to="/missions">
        Missions
      </NavLink>
      <div className="nav__divider">|</div>
      <NavLink className="nav__link" to="/myProfile">
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default Nav;
