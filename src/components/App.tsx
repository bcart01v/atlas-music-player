import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import LoadingSkeleton from "./LoadingSkeleton";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(fetchData);
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-between p-8 min-h-screen bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <MusicPlayer />
      )}
      <Footer />
    </div>
  );
}

export default App;