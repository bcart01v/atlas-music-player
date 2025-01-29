import React from 'react';

interface PlayListItemProps {
  title: string;
  artist: string;
  duration: string;
  isPlaying: boolean;
  onClick: () => void;
}

const PlayListItem: React.FC<PlayListItemProps> = ({
  title,
  artist,
  duration,
  isPlaying,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center justify-between p-2 rounded-lg transition duration-200 cursor-pointer ${
        isPlaying
          ? 'bg-primary text-darkText'
          : 'bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText'
      } hover:bg-secondary hover:text-white dark:hover:bg-primary-dark dark:hover:text-darkBackground`}
      onClick={onClick}
    >
      <div>
        <h3 className="text-md font-medium">{title}</h3>
        <p className="text-sm">{artist}</p>
      </div>
      <span className="text-sm">{duration}</span>
    </div>
  );
};

export default PlayListItem;