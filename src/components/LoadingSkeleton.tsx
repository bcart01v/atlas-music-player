import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8 max-w-4xl w-full mx-auto rounded-lg animate-pulse p-6">
      <div className="flex flex-col items-center w-full md:w-2/3 space-y-4 p-4 bg-lightBackground dark:bg-darkBackground rounded-lg">
        <div className="w-96 h-96 bg-gray-300 rounded-2xl dark:bg-gray-700"></div>

        <div className="h-6 bg-gray-300 rounded dark:bg-gray-700 w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded dark:bg-gray-700 w-1/2"></div>

        <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-full"></div>

        <div className="flex items-center justify-between w-full space-x-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-12 w-12 bg-gray-300 rounded-lg dark:bg-gray-700"
            ></div>
          ))}
        </div>

        <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-full"></div>
      </div>

      <div className="flex flex-col w-full md:w-1/2 bg-lightBackground dark:bg-darkBackground rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-lightText dark:text-darkText mb-4">
          Playlist
        </h3>

        <div className="space-y-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-300 dark:bg-gray-700"
            >
              <div>
                <div className="h-4 w-56 bg-gray-300 rounded dark:bg-gray-700 mb-1"></div>
                <div className="h-4 w-40 bg-gray-300 rounded dark:bg-gray-700"></div>
              </div>
              <div className="h-4 w-12 bg-gray-300 rounded dark:bg-gray-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;