import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Videoplayer from "./components/Videoplayer";

const App = () => {
  return (
    <>
    <div className="App">
      <Router>
      <header className="App-header">
        <div>
         
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/video/:id" element={<Videoplayer />} />
          </Routes>
        </div>
      </header>
      </Router>
    </div>
    </>
  );
};

export default App;