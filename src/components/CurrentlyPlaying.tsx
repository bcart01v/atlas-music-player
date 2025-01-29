import React, { useState, useEffect } from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';
import MusicProgressBar from './ProgressBar';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  song: string;
}

interface CurrentlyPlayingProps {
  playlist: Song[];
  currentlyPlayingId: string | null;
  setCurrentlyPlayingId: React.Dispatch<React.SetStateAction<string | null>>;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  playlist,
  currentlyPlayingId,
  setCurrentlyPlayingId,
}) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!currentlyPlayingId) return;
    const fetchCurrentSong = async () => {
      try {
        const response = await fetch(`/api/v1/songs/${currentlyPlayingId}`);
        const data = await response.json();
        setCurrentSong(data);
        setProgress(0);
      } catch (error) {
        console.error('Error fetching current song:', error);
      }
    };
    fetchCurrentSong();
  }, [currentlyPlayingId]);

  useEffect(() => {
    if (!currentlyPlayingId) return;
    const fetchLyrics = async () => {
      try {
        const response = await fetch(`/api/v1/lyrics/${currentlyPlayingId}`);
        if (!response.ok) throw new Error('Failed to fetch lyrics');
        const data = await response.json();
        setLyrics(data.lyrics);
      } catch (error) {
        console.error('Error fetching lyrics:', error);
        setLyrics(null);
      }
    };
    fetchLyrics();
  }, [currentlyPlayingId]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + (100 / currentSong!.duration) : 100));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong]);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleRewind = () => {
    const currentIndex = playlist.findIndex((song) => song.id === currentlyPlayingId);
    if (currentIndex > 0) {
      setCurrentlyPlayingId(playlist[currentIndex - 1].id);
    }
  };

  const handleFastForward = () => {
    if (isShuffle) {
      let randomIndex = Math.floor(Math.random() * playlist.length);
      while (playlist[randomIndex].id === currentlyPlayingId) {
        randomIndex = Math.floor(Math.random() * playlist.length);
      }
      setCurrentlyPlayingId(playlist[randomIndex].id);
    } else {
      const currentIndex = playlist.findIndex((song) => song.id === currentlyPlayingId);
      if (currentIndex < playlist.length - 1) {
        setCurrentlyPlayingId(playlist[currentIndex + 1].id);
      }
    }
  };

  const handleToggleShuffle = () => {
    setIsShuffle((prev) => !prev);
  };

  const handleProgressChange = (newProgress: number) => {
    setProgress(newProgress);
  };

  if (!currentSong) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center space-y-6 rounded-lg">
      <CoverArt cover={currentSong.cover} lyrics={lyrics} />
      <SongTitle title={currentSong.title} artist={currentSong.artist} />

      <MusicProgressBar
        progress={progress}
        duration={currentSong.duration}
        onProgressChange={handleProgressChange}
      />

      <PlayControls
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onRewind={handleRewind}
        onFastForward={handleFastForward}
        onShuffle={handleToggleShuffle}
        isShuffle={isShuffle}
        playbackSpeed={playbackSpeed}
        onChangePlaybackSpeed={() =>
          setPlaybackSpeed((prev) => (prev === 2 ? 0.5 : prev + 0.5))
        }
      />
      <VolumeControls
        volume={volume}
        onVolumeChange={(newVolume) => setVolume(newVolume)}
      />
    </div>
  );
};

export default CurrentlyPlaying;