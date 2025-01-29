import React, { useState, useEffect, useRef } from "react";

interface CoverArtProps {
    cover: string;
    lyrics: string | null;
}

const CoverArt: React.FC<CoverArtProps> = ({ cover, lyrics }) => {
    const [isHovered, setIsHovered] = useState(false);
    const lyricsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (lyricsRef.current) {
            lyricsRef.current.scrollTop = 0;
        }
    }, [lyrics]);

    return (
        <div 
            className="relative flex items-center p-2 justify-center" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Album Cover with Lyrics"
        >
            <img src={cover} alt="Album Cover" className="rounded-2xl w-96 h-96"/>

            {isHovered && lyrics && (
                <div
                    ref={lyricsRef}
                    className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-20 flex flex-col items-start text-white p-10 p-5 overflow-y-auto rounded-2xl"
                >
                    <p className="text-sm leading-6 text-left whitespace-pre-line w-full">
                        {lyrics}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CoverArt;