import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Video from "./components/Video";
import VideosIndex from "./components/VideosIndex";
import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [maxResult, setMaxResult] = useState(5);
 
  

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${search}&type=video&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, [search, maxResult]);

  return (
    <div className="App">
      <Router>
        <Navbar setSearch={setSearch} setMaxResult={setMaxResult} />
        <div className="main_videos">
          <Routes>
            <Route path="/" element={<Home videos={videos}/>} />
            <Route path="/videos" element={<VideosIndex videos={videos} />} />
            <Route path="/videos/:id" element={<Video videos={videos} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
