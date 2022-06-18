import React from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Link } from "react-router-dom";
import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="badge">
//         <h2>YouTube</h2>
//       </div>
//       <Home />
//       <About />
//     </div>
//   );
// };

// export default Navbar;

// import { Link } from "react-router-dom";
// import "./Nav.css";


const Navbar = () => {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            You<span>Tube</span>
          </Link>
        </h1>
      </article>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
