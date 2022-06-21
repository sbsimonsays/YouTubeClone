import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBarContainer">
      <img
        src="https://jungletopp.com/wp-content/uploads/2020/10/YouTube-Logo-1024x576.jpg"
        alt="youtubelogo"
      />
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default NavBar;
