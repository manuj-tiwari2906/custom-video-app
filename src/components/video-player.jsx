// VideoPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, currentVideo }) => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);

  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying((prevPlaying) => !prevPlaying);
  };

  const handleSeek = (newTime) => {
    setCurrentTime(newTime);
    playerRef.current.seekTo(newTime);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };

  const handleDuration = (videoDuration) => {
    setDuration(videoDuration);
  };

  const handleAutoplay = () => {
    setPlaying(true);
  };

  const handleSpeedChange = (newSpeed) => {
    setPlaybackSpeed(newSpeed);
  };

  useEffect(() => {
    playerRef.current.seekTo(currentTime);
  }, [playbackSpeed]);

  return (
    <div className='player-parent' style={{ marginTop: '20px' }}>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={playing}
        controls
        onProgress={handleProgress}
        onDuration={handleDuration}
        playbackRate={playbackSpeed}
      />
      {/* <div className='controls'>
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <input
          type='range'
          min={0}
          max={duration}
          step={1}
          value={currentTime}
          onChange={(e) => handleSeek(parseFloat(e.target.value))}
        />
        <span>{`${formatTime(currentTime)} / ${formatTime(duration)}`}</span>
      </div> */}
      <div className='title-and-description'>
        <div className='title'>{currentVideo.title}</div>
        <div className='description'>{currentVideo.description}</div>
      </div>
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

export default VideoPlayer;
