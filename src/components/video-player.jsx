// src/components/VideoPlayer.js
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, autoplay, playbackSpeed }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(autoplay);

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={playing}
        playbackRate={playbackSpeed}
      />
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
