import React, {useState, useEffect} from 'react';
import {generateBoardNumbers, reinitialize} from "../Boardlogic"
import Tile from "./Tile"



const Board = (props)=>{
    const [board,setBoard] = useState([])
    const style = {backgroundColor:"black",display:"grid",gridTemplateColumns:"auto ".repeat(16),height:"560px",width:"560px",justifyContent:"space-evenly",alignContent:"space-evenly",position:"absolute", top:"140px",left:"400px"}
    
    useEffect(
        ()=>{
            setBoard(generateBoardNumbers())
            console.log(board)
        },[]
          
    )
    return (
        
        <div style= {style}>
            {
                  board.map((value,index)=>{
                      return <Tile boardTileProp= {value} index = {} />
                  })     
            }
        </div>

    )  
}



export default Board



// tileProp = {...value,
//     "id":index,
//     "checked":false,
//      "hasMine":(value.value==="*"?true:false),
//      "flagged":false,
//      "clickHandler":""    }