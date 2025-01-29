import React from "react";

interface MusicProgressBarProps {
  progress: number;
  duration: number;
  onProgressChange: (progress: number) => void;
}

const MusicProgressBar: React.FC<MusicProgressBarProps> = ({
  progress,
  duration,
  onProgressChange,
}) => {
  const currentTime = () => {
    const currentSeconds = Math.floor((progress / 100) * duration);
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const remainingTime = () => {
    const currentSeconds = Math.floor((progress / 100) * duration);
    const remainingSeconds = duration - currentSeconds;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return `-${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="flex flex-col items-center mt-6 pb-1.5">
      <div className="w-96 flex items-center gap-4">
        <span className="text-sm text-lightText dark:text-white">
          {currentTime()}
        </span>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => onProgressChange(Number(e.target.value))}
          className="w-full cursor-pointer appearance-none rounded-lg bg-lightBackground dark:bg-darkBackground dark:border dark:border-white"
          style={{
            background: `linear-gradient(to right, #C83803 ${progress}%, #0B162A ${progress}%)`,
            height: "8px",
          }}
        />

        <span className="text-sm text-lightText dark:text-white">
          {remainingTime()}
        </span>
      </div>
    </div>
  );
};

export default MusicProgressBar;