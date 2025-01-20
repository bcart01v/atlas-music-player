import React from "react";

const PlayList_Item = ({ title, artist, length }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <div>
        <h3 className="text-md font-medium text-gray-800">All Eyes On Me</h3>
        <p className="text-md text-gray-500">Bo Burnham</p>
      </div>
      <span className="text-sm text-gray-400">4:15</span>
    </div>
  );
};

export default PlayList_Item;