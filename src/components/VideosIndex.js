import React from "react";
import VideoCard from "./VideoCard";

const VideosIndex = ({ videos }) => {
  return (
    <div className="videos-display">
      <ul>
        {videos.map((video) => {
          return <VideoCard key={video.id.videoId} video={video} />;
        })}
      </ul>
    </div>
  );
}

export default VideosIndex;