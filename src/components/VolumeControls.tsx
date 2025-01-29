import React, { useState } from "react";
import { VolumeX, Volume2 } from "lucide-react";

interface VolumeControlsProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
}

const VolumeControls: React.FC<VolumeControlsProps> = ({
  volume,
  onVolumeChange,
}) => {
  const [previousVolume, setPreviousVolume] = useState(50);

  const toggleMute = () => {
    if (volume === 0) {
      onVolumeChange(previousVolume);
    } else {
      setPreviousVolume(volume);
      onVolumeChange(0);
    }
  };

  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10);
    onVolumeChange(newVolume);
    if (newVolume > 0) setPreviousVolume(newVolume);
  };

  return (
    <div className="flex flex-col items-center mt-6 pb-1.5">
      <div className="w-96 flex items-center gap-4">
        <button onClick={toggleMute} aria-label="Toggle Mute">
          {volume === 0 ? (
            <VolumeX className="w-7 h-7 text-darkMagenta dark:text-lightTeal cursor-pointer hover:text-primary-dark transition" />
          ) : (
            <Volume2 className="w-7 h-7 text-darkMagenta dark:text-lightTeal cursor-pointer hover:text-primary-dark transition" />
          )}
        </button>

        <input
          id="volume-control"
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={changeVolume}
          className="w-full cursor-pointer appearance-none rounded-lg bg-lightBackground dark:bg-darkBackground dark:border dark:border-white"
          style={{
            background: `linear-gradient(to right, #C83803 ${volume}%, #0B162A ${volume}%)`,
            height: "8px",
          }}
        />
      </div>

      <style>
        {`

        /* If there's one thing I learned  doing CSS on Guest Host */
        /* It's don't assume everyone is using the same browser... /*

          /* Webkit Browsers (Chrome, Safari) */
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #C83803; /* Dark Orange */
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
            cursor: pointer;
          }

          /* Firefox */
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #C83803; /* Dark Orange */
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
            cursor: pointer;
          }

          /* Microsoft Edge */
          input[type="range"]::-ms-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #C83803; /* Dark Orange */
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default VolumeControls;