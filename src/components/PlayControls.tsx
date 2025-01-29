import React from "react";
import { Rewind, Play, Pause, FastForward, Shuffle } from "lucide-react";

interface PlayControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onRewind: () => void;
  onFastForward: () => void;
  onShuffle: () => void;
  isShuffle: boolean;
  playbackSpeed: number;
  onChangePlaybackSpeed: () => void;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  onTogglePlay,
  onRewind,
  onFastForward,
  onShuffle,
  isShuffle,
  playbackSpeed,
  onChangePlaybackSpeed,
}) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="w-96 flex justify-between items-center">
        {/* this is Playback */}
        <button
          className="w-7 mt-2 text-2xl font-medium cursor-pointer text-primary hover:text-primary-dark transition bg-transparent border-none dark:text-white"
          aria-label="Playback Speed"
          onClick={onChangePlaybackSpeed}
        >
          {`${playbackSpeed}x`}
        </button>

        {/* this is rewind */}
        <button
          className="p-2 rounded-md cursor-pointer bg-lightBackground hover:bg-primary-dark dark:bg-darkBackground dark:hover:bg-primary-dark dark:border-white"
          aria-label="Rewind"
          onClick={onRewind}
        >
          <Rewind className="w-7 h-7 text-primary dark:text-white" />
        </button>

        {/* this is play/pause */}
        <button
          className="p-2 rounded-md cursor-pointer bg-primary hover:bg-primary-dark transition duration-300 dark:bg-secondary dark:hover:bg-primary-dark dark:border-white"
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={onTogglePlay}
        >
          {isPlaying ? (
            <Pause className="w-7 h-7 text-white" />
          ) : (
            <Play className="w-7 h-7 text-white" />
          )}
        </button>

        {/* this is the Fast Forward */}
        <button
          className="p-2 rounded-md cursor-pointer bg-lightBackground hover:bg-primary-dark dark:bg-darkBackground dark:hover:bg-primary-dark dark:border-white"
          aria-label="Fast Forward"
          onClick={onFastForward}
        >
          <FastForward className="w-7 h-7 text-primary dark:text-white" />
        </button>

        {/* this is the shuffle */}
        <button
          className={`p-2 rounded-md cursor-pointer bg-lightBackground hover:bg-primary-dark dark:bg-darkBackground dark:hover:bg-primary-dark dark:border-white ${
            isShuffle ? "bg-primary text-white" : ""
          }`}
          aria-label="Shuffle"
          onClick={onShuffle}
        >
          <Shuffle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default PlayControls;