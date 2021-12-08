import React, { useState, useEffect, useContext } from "react";
import { generateBoardNumbers, reinitialize } from "../Boardlogic";
import Tile from "./Tile";

import { BoardContext, FlagONContext, CountedMinesContext } from "./PreApp";

const Board = () => {
  const countedMines = useContext(CountedMinesContext);
  const flagON = useContext(FlagONContext);
  const board = useContext(BoardContext);

  const style = {
    backgroundColor: "#152238",
    display: "grid",
    gridTemplateColumns: "auto ".repeat(16),
    padding:"10px",
    height: "530px",
    width: "530px",
    justifyContent: "space-evenly",
    alignContent: "space-evenly",
    boxShadow:"-5px 5px 10px rgba(8, 14, 22, 0.2), 5px -5px 10px rgba(8, 14, 22, 0.2), -5px -5px 10px rgba(34, 54, 90, 0.9), 5px 5px 13px rgba(8, 14, 22, 0.9), inset 1px 1px 2px rgba(34, 54, 90, 0.3), inset -1px -1px 2px rgba(8, 14, 22, 0.5)",
    borderRadius:"10px",
  };
  //console.log(RevealBoardCells)

  return (
    <div style={style}>
      {board
        ? board.map((value, index) => {
            //console.log(value.id)
            return (
              <Tile
                key={value.id}
                index={index}
                TileRevealed={board[index].uncovered}
                TileValue={board[index].value}
              />
            );
          })
        : null}
    </div>
  );
};

export default Board;
