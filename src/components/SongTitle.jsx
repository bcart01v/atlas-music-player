import React from "react";

const SongTitle = () => {
    return (
        <div className="text-center bg-lightBackground dark:bg-darkBackground p-4 rounded-lg">
            <h1 className="text-4xl font-semibold text-lightText dark:text-darkText">Bo Burnham</h1>
            <p className="text-lg text-secondary-dark dark:text-secondary-light">30</p>
        </div>
    );
};

export default SongTitle;