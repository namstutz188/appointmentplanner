import React from "react";
import {Tile} from '../tile/Tile';
export const TileList = ({arr}) => {

  return (
    <div>
      {arr.map((obj,i) => {
        return <Tile name = {obj.name} description = {obj} key = {i} />;
        })
      }
    </div>
  );
};
