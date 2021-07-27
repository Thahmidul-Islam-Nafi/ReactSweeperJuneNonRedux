import React, {useState, useEffect,useContext} from 'react';
import {generateBoardNumbers, reinitialize} from "../Boardlogic"
import Tile from "./Tile"

import { BoardContext,FlagONContext,CountedMinesContext } from './PreApp';

const Board = ()=>{
    
    
 
    const countedMines =useContext(CountedMinesContext)
    const flagON =useContext(FlagONContext)
    const board = useContext(BoardContext)
   
    const style = {backgroundColor:"red",display:"grid",gridTemplateColumns:"auto ".repeat(16),height:"530px",width:"530px",justifyContent:"space-evenly",alignContent:"space-evenly",position:"absolute", top:"140px",left:"400px"}
    //console.log(RevealBoardCells)
    
    
    return (
        
        <div style= {style}>
            {     
                  board?board.map((value,index)=>{
                      
                      //console.log(value.id)
                      return <Tile key={value.id} index = {index} TileRevealed= {board[index].uncovered} TileValue={board[index].value}/>
                  }) :null    
            }
        </div>

    )  
}



export default Board


