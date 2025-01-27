import React from "react";
import placeholderImage from "../assets/placeholder.svg";

const CoverArt = () => {
    return (
        <div className='flex items-center p-2 justify-center'>
            <img src={placeholderImage} className='rounded-2xl w-96 h-96'></img>
        </div>
    );
};

export default CoverArt;