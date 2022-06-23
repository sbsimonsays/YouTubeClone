import { Link } from "react-router-dom";
import Home from "./Home";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="NavBarContainer">
      <img
        src="https://jungletopp.com/wp-content/uploads/2020/10/YouTube-Logo-1024x576.jpg"
        alt="youtubelogo"
      />
      <Link to="/" >
        <h3>Home</h3>
      </Link>
      <Link to="/about" ><h3>About</h3></Link>
    </nav>
  );
};

export default Navbar;
