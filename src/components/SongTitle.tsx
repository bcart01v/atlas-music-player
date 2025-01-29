import React from "react";

interface songTitle {
    title: string
    artist: string
}

const SongTitle: React.FC<songTitle> = ({ title, artist }) => (
    
        <div className="text-center bg-lightBackground dark:bg-darkBackground p-4 rounded-lg">
            <h1 className="text-4xl font-semibold text-lightText dark:text-darkText">{title}</h1>
            <p className="text-lg text-secondary-dark dark:text-secondary-light">{artist}</p>
        </div>
    );

export default SongTitle;