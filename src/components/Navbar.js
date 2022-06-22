import React from "react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar ({setSearch, setMaxResult}) {
      return (
        <header>
          <nav className="navBar">
            <Link to="/">
            <h2>Youtube</h2>
            </Link>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/About">
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