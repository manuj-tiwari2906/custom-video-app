// src/App.js
import React, { useState } from 'react';
import VideoPlayer from './components/video-player';
import Playlist from './components/playlist';

const App = () => {
  const [playlist, setPlaylist] = useState([
    { id: '1', title: 'Video 1', url: 'https://example.com/video1.mp4' },
    { id: '2', title: 'Video 2', url: 'https://example.com/video2.mp4' },
    // Add more videos as needed
  ]);

  const [currentVideo, setCurrentVideo] = useState(playlist[0]);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(playlist);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPlaylist(items);
  };

  return (
    <div>
      <VideoPlayer
        videoUrl={currentVideo.url}
        autoplay={true}
        playbackSpeed={playbackSpeed}
      />
      <Playlist
        videos={playlist}
        onVideoClick={handleVideoClick}
        onDragEnd={handleDragEnd}
      />
    </div>
  );
};

export default App;
