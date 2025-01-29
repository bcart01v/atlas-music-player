import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
  songUrl: string;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
  onSongEnd: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  songUrl,
  isPlaying,
  volume,
  playbackSpeed,
  onSongEnd,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume / 100;
    audioRef.current.playbackRate = playbackSpeed;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, volume, playbackSpeed, songUrl]);

  return (
    <audio
      ref={audioRef}
      src={songUrl}
      onEnded={onSongEnd}
    />
  );
};

export default AudioPlayer;