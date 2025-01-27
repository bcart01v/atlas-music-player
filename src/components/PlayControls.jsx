import React from "react";
import forward from '../assets/forward.svg';
import playicon from '../assets/playicon.svg';
import previous from '../assets/previous.svg';
import shuffle from '../assets/shuffle.svg';

const PlayControls = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="w-96 flex justify-between items-center">
        <button className="w-7 mt-2 text-2xl font-medium cursor-pointer text-primary hover:text-primary-dark transition bg-transparent border-none dark:text-white">
          1x
        </button>

        <button className="p-2 rounded-md cursor-pointer bg-lightBackground hover:bg-primary-dark dark:bg-darkBackground dark:hover:bg-primary-dark dark:border-white">
          <img
            className="w-7 filter dark:invert"
            src={previous}
            alt="Previous"
          />
        </button>

        <button className="p-2 rounded-md cursor-pointer bg-primary hover:bg-primary-dark transition duration-300 dark:bg-secondary dark:hover:bg-primary-dark dark:border-white">
          <img
            className="w-7 filter dark:invert"
            src={playicon}
            alt="Play"
          />
        </button>

        <button className="p-2 rounded-md cursor-pointer bg-lightBackground hover:bg-primary-dark dark:bg-darkBackground dark:hover:bg-primary-dark dark:border-white">
          <img
            className="w-7 filter dark:invert"
            src={forward}
            alt="Forward"
          />
        </button>

        <button className="p-2 rounded-md cursor-pointer bg-lightBackground hover:bg-primary-dark dark:bg-darkBackground dark:hover:bg-primary-dark dark:border-white">
          <img
            className="w-7 filter dark:invert"
            src={shuffle}
            alt="Shuffle"
          />
        </button>
      </div>
    </div>
  );
};

export default PlayControls;