import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  song: string;
}

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch("/api/v1/playlist");
        const data: Song[] = await response.json();
        setPlaylist(data);
        setCurrentlyPlayingId(data[0]?.id || null);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };
    fetchPlaylist();
  }, []);

  if (!playlist.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 max-w-4xl w-full mx-auto p-6 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText rounded-lg shadow-2xl transition-all duration-300">
      <section className="flex-1 md:w-2/3 bg-lightBackground dark:bg-darkBackground rounded-lg p-6">
        <CurrentlyPlaying
          playlist={playlist}
          currentlyPlayingId={currentlyPlayingId}
          setCurrentlyPlayingId={setCurrentlyPlayingId}
        />
      </section>

      <section className="flex-1 md:w-1/2 bg-lightBackground dark:bg-darkBackground rounded-lg p-6">
        <Playlist
          playlist={playlist}
          currentlyPlaying={currentlyPlayingId}
          setCurrentlyPlaying={setCurrentlyPlayingId}
        />
      </section>
    </div>
  );
};

export default MusicPlayer;