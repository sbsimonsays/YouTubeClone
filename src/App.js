import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Videoplayer from "./components/Videoplayer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div>
      <Navbar />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/video/:id" component={Videoplayer} />
          </Routes>
        </div>
      </header>
    </div>
  );
};

export default App;
