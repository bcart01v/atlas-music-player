import React, { useState } from 'react';

const MusicProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const totalSeconds = 223;

  const currentTime = () => {
    const currentSeconds = Math.floor((progress / 100) * totalSeconds);
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const remainingTime = () => {
    const currentSeconds = Math.floor((progress / 100) * totalSeconds);
    const remainingSeconds = totalSeconds - currentSeconds;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return `-${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="flex flex-col items-center mt-6 pb-1.5">
      <div className="w-96 flex items-center gap-4">
        <span className="text-sm text-gray-600">{currentTime()}</span>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-lg bg-gray-300"
          style={{
            background: `linear-gradient(to right, #4B5563 ${progress}%, #E5E7EB ${progress}%)`,
            height: '8px',
          }}
        />

        <span className="text-sm text-gray-600">{remainingTime()}</span>
      </div>
    </div>
  );
};

export default MusicProgressBar;