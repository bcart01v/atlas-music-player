import React from "react";
import PlaylistItem from "./PlayListItem";

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  song: string;
}

interface PlaylistProps {
  playlist: Song[];
  currentlyPlaying: string | null;
  setCurrentlyPlaying: (id: string) => void;
}

const formatTime = (duration: number): string => {
  if (!duration || duration < 0) return "0:00";
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const Playlist: React.FC<PlaylistProps> = ({
  playlist,
  currentlyPlaying,
  setCurrentlyPlaying,
}) => {
  return (
    <div className="bg-lightBackground w-full md:w-[350px] p-6 rounded-lg dark:bg-darkBackground shadow-md">
      <h3
        className="text-lg font-semibold text-lightText dark:text-darkText mb-4"
        aria-label="Playlist"
      >
        Playlist
      </h3>
      <div className="space-y-2">
        {playlist.map((song) => (
          <PlaylistItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={formatTime(song.duration)}
            isPlaying={song.id === currentlyPlaying}
            onClick={() => setCurrentlyPlaying(song.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;