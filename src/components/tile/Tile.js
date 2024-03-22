import React from "react";

export const Tile = ({name, description}) => {

//Want to render all properties of object except for the name one

  return (
    <div className="tile-container">
      <p className = 'tile-title'>{name}</p>
      {
          Object.keys(description).map((key,i) => {
            if (key !== 'name') {
              return <p className = 'tile' key = {i}>{description[key]}</p>;
            }
        })
      }
    </div>
  );
};
