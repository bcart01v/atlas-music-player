import React from 'react';
import PlaylistItem from './PlaylistItem';

const Playlist = () => {
  const playlist = [
    { id: 1, title: '30', artist: 'Bo Burnham', length: '2:35' },
    { id: 2, title: 'Content', artist: 'Bo Burnham', length: '1:43' },
    { id: 3, title: 'Welcome to the Internet', artist: 'Bo Burnham', length: '4:36' },
    { id: 4, title: 'Bezos I', artist: 'Bo Burnham', length: '0:58' },
    { id: 5, title: 'All Eyes On Me', artist: 'Bo Burnham', length: '5:03' },
    { id: 6, title: 'Goodbye', artist: 'Bo Burnham', length: '5:00' },
    { id: 7, title: 'That Funny Feeling', artist: 'Bo Burnham', length: '4:21' },
    { id: 8, title: 'The Future', artist: 'Bo Burnham', length: '1:43' },
    { id: 9, title: 'Problematic', artist: 'Bo Burnham', length: '4:23' },
  ];

  return (
    <div className="">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Playlist</h3>
      <div className="">
        {playlist.map((song, index) => (
          <PlaylistItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            length={song.length}
            isPlaying={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;