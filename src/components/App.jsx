import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="h-full flex flex-col items-center justify-between p-8 min-h-screen bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;