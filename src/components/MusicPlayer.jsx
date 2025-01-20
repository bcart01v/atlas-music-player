import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayList_Item from "./PlayList_Item";

const MusicPlayer = () => {
  return (
    <div className="flex flex-col items-center space-y-6 bg-gray-100 p-6 rounded-lg shadow-md">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
      <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4"></h3>
        <div className="space-y-2">
          <PlayList_Item />
          <PlayList_Item />
          <PlayList_Item />
        </div>
      </div>
    </div>
  );
};
console.log("App rendered");

export default MusicPlayer;