import React, { useState, useEffect, createContext ,useContext} from "react";
import ReactDom from "react-dom";
import {
  generateBoardNumbersAndState,
  BombNumber,
  getNeighbours,
  mapToDoubleIndex,
} from "../Boardlogic";
import Board from "./Board";
import Reset from "./Reset";
import Flag from "./Flag";
import Info from "./Info";


export const BoardContext = createContext();
export const FlagONContext = createContext();
export const ToggleFlagContext = createContext();
export const SetMinesContext = createContext();
export const CountedMinesContext = createContext();
export const SetBoardContext = createContext();
export const BoardResetContext = createContext();
export const GameOverContext = createContext();
export const SetGameOverContext = createContext()
export const TimerStateContext = createContext()
export const SetTimerStateContext = createContext()
const PreApp = () => {
  const [board, setBoard] = useState([]);
  
  const [flagON, setFlagON] = useState(false);
  
  const [countedMines, setCountedMines] = useState(BombNumber);
 
  const [gameOver,setGameOver] = useState(false)
  const [timerState,setTimerState] =useState("stop")
  const style = {backgroundColor:"cyan",height:"100vh"};
  
  
  useEffect(() => {
    setBoard(
      generateBoardNumbersAndState()
    );
    
  }, []);
  
  useEffect(()=>{
    if(gameOver){
      setTimerState("stop")
    }
  },[gameOver])
  //console.log(board);

  function ResetBoard(){
    setBoard(
      generateBoardNumbersAndState()
    );
    setTimerState("reset")
    setCountedMines(BombNumber)
    console.log("ResetPressed")
  }
  

  const toggleFlag = () => {
    setFlagON((prevFlagState) => !prevFlagState);
    console.log(flagON);
  };

  return (
    
      <FlagONContext.Provider value={flagON}>
        <CountedMinesContext.Provider value={countedMines}>
          <BoardContext.Provider value={board}>
              <SetBoardContext.Provider value = {setBoard}>
                <BoardResetContext.Provider value = {ResetBoard}>
                  <ToggleFlagContext.Provider value = {toggleFlag}>
                    <SetMinesContext.Provider value = {setCountedMines}>
                   <GameOverContext.Provider value = {gameOver}>
                     <SetGameOverContext.Provider value = {setGameOver}>
                    <TimerStateContext.Provider value = {timerState}>
                      <SetTimerStateContext.Provider value = {setTimerState}>
                      <div style={style}>
              <Info/>
              <Reset />
              <Flag  />
              <Board />
            </div>
                      </SetTimerStateContext.Provider>
                    </TimerStateContext.Provider>
                     </SetGameOverContext.Provider>
                   </GameOverContext.Provider>

                    </SetMinesContext.Provider>
                  </ToggleFlagContext.Provider>
               
                </BoardResetContext.Provider>
              
              </SetBoardContext.Provider>
            
          </BoardContext.Provider>
        </CountedMinesContext.Provider>
      </FlagONContext.Provider>
   
  );
};

export default PreApp;
