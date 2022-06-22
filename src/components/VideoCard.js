import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="videoCard">
      <li>
        <Link to={`/videos/${video.id.videoId}`}>
          <img className="videoCard-thumbnail" alt="thumbnails" src={video.snippet.thumbnails.medium.url} />
          <h4>{video.snippet.title}</h4>
        </Link>
      </li>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoCard;