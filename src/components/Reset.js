import React, { useState, useEffect, useContext } from "react";
import ReactDom from "react-dom";
import { BoardResetContext } from "./PreApp";
import reset from "../img/reset.png";
const Reset = () => {
  const style = {
    height: "52px",
    width: "76px",
    
    borderRadius: "15px 0px 0px 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow:"-2px 2px 4px rgba(9, 15, 25, 0.2), 2px -2px 4px rgba(9, 15, 25, 0.2), -2px -2px 4px rgba(33, 53, 87, 0.9), 2px 2px 5px rgba(9, 15, 25, 0.9), inset 1px 1px 2px rgba(33, 53, 87, 0.3), inset -1px -1px 2px rgba(9, 15, 25, 0.5)"
  };
  const BoardReset = useContext(BoardResetContext);
  return (
    <div
      onClick={() => {
        BoardReset();
      }}
      style={style}
    >
      <img src={reset} alt="" srcset="" height="25px" width="25px" />
    </div>
  );
};

export default Reset;
