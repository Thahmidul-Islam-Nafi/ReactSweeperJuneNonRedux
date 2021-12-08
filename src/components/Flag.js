import React, { useState, useEffect, useContext } from "react";
import ReactDom from "react-dom";
import flagred from "../img/flagred.png";
import flagcyan from "../img/flagcyan.png";
import {
  FlagONContext,
  ToggleFlagContext,
  SetTimerStateContext,
} from "./PreApp";
const Flag = () => {
  const toggleFlag = useContext(ToggleFlagContext);
  const flagON = useContext(FlagONContext);
  const style = {
    backgroundColor: "#152238",
    height: "52px",
    width: "76px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   
    borderRadius: "0px 15px 15px 0px",
    boxShadow:"2px 2px 4px rgba(9, 15, 25, 0.2), -2px -2px 4px rgba(9, 15, 25, 0.2), 2px -2px 4px rgba(33, 53, 87, 0.9), -2px 2px 5px rgba(9, 15, 25, 0.9), inset -1px 1px 2px rgba(33, 53, 87, 0.3), inset 1px -1px 2px rgba(9, 15, 25, 0.5)"
  };
  //console.log(onPressed)
  const setTimerState = useContext(SetTimerStateContext);

  return (
    <div
      style={style}
      onClick={() => {
        toggleFlag();
        setTimerState("start");
      }}
    >
      <img
        src={flagON ? flagred : flagcyan}
        alt=""
        height="25px"
        width="25px"
      />
    </div>
  );
};

export default Flag;
