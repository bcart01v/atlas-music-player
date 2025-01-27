import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import ProgressBar from "./ProgressBar";

const CurrentlyPlaying = () => {
    return (
        <div className="flex flex-col items-center space-y-6 rounded-lg">
            <CoverArt />
            <SongTitle />
            <ProgressBar />
            <PlayControls />
            <VolumeControls />
        </div>
    );
};

export default CurrentlyPlaying;