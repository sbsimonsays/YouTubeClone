import React from "react"
import { Link } from "react-router-dom";
import Search from "./Search";
import "./Navbar.css"

function Navbar ({setSearch, setMaxResult}) {
      return (
        <header>
          <nav className="navbar">
          
            <Link to="/">
            <img
        src="https://jungletopp.com/wp-content/uploads/2020/10/YouTube-Logo-1024x576.jpg"
        width={100}
        alt="youtubelogo"
      />
            </Link>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
        </nav>
        <aside>
          <Search setSearch= {setSearch} setMaxResult = {setMaxResult}/>
        </aside>
        </header>
      );
    }
    export default Navbar;