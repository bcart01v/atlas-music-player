import React from 'react';
import PlaylistItem from './PlaylistItem';

const Playlist = () => {
  const playlist = [
    { id: 1, title: '30', artist: 'Bo Burnham', length: '2:35' },
    { id: 2, title: 'Superbowl Shuffle', artist: '1985 Chicago Bears', length: '1:43' },
    { id: 3, title: 'Welcome to the Internet', artist: 'Bo Burnham', length: '4:36' },
    { id: 4, title: 'Bezos I', artist: 'Bo Burnham', length: '0:58' },
    { id: 5, title: 'All Eyes On Me', artist: 'Bo Burnham', length: '5:03' },
    { id: 6, title: 'Goodbye', artist: 'Bo Burnham', length: '5:00' },
    { id: 7, title: 'That Funny Feeling', artist: 'Bo Burnham', length: '4:21' },
    { id: 8, title: 'The Future', artist: 'Bo Burnham', length: '1:43' },
    { id: 9, title: 'Problematic', artist: 'Bo Burnham', length: '4:23' },
  ];

  return (
    <div className="bg-lightBackground w-100 p-4 rounded-lg border border-lightText dark:bg-darkBackground dark:border-darkText">
      <h3 className="text-lg font-semibold text-lightText dark:text-darkText mb-4">Playlist</h3>
      <div className="space-y-2">
        {playlist.map((song, index) => (
          <PlaylistItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            length={song.length}
            isPlaying={index === 0}
            hoverColor="hover:bg-primary dark:hover:bg-primary-dark hover:text-lightText dark:hover:text-darkText"
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;