import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import ThemeToggle from "./ThemeToggle";

const MusicPlayer = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:space-x-6 max-w-fit rounded-lg border border-primary-dark">
      <div className="w-full md:w-auto">
        <CurrentlyPlaying />
      </div>
      
      <div className="w-full md:max-w-md">
        <div className="space-y-2">
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;