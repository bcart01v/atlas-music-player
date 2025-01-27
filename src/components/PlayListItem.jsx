import React from 'react';

const PlayListItem = ({ title, artist, length, isPlaying }) => {
  return (
    <div
      className={`flex items-center justify-between p-2 border-b border-gray-200 ${
        isPlaying ? 'bg-gray-200' : ''
      }`}
    >
      <div>
        <h3 className="text-md font-medium text-gray-800">{title}</h3>
        <p className="text-md text-gray-500">{artist}</p>
      </div>
      <span className="text-sm text-gray-400">{length}</span>
    </div>
  );
};

export default PlayListItem;