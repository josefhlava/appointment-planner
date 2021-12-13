import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((item, index) => (
        <p className={index === 0 ? "title-tile" : "tile"}>{item}</p>
      ))}
    </div>
  );
};
