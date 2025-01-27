import React from 'react';

const PlaylistItem = ({ title, artist, length, isPlaying }) => {
  return (
    <div
      className={`flex items-center justify-between p-2 rounded-lg transition duration-200 ${
        isPlaying
          ? 'bg-primary text-darkText'
          : 'bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText'
      } hover:bg-secondary hover:text-white dark:hover:bg-primary-dark dark:hover:text-darkBackground`}
    >
      <div>
        <h3 className="text-md font-medium">{title}</h3>
        <p className="text-sm">{artist}</p>
      </div>
      <span className="text-sm">{length}</span>
    </div>
  );
};

export default PlaylistItem;