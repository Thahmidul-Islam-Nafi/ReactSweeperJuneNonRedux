import React,{useContext, useEffect} from 'react';
import { BoardContext} from './PreApp';
import { SetTimerStateContext } from './PreApp';
import mine from '../img/mine.png'
const UncoveredTile = ({TileValue})=>{
    const setTimerState = useContext(SetTimerStateContext)
    useEffect(()=>{
        setTimerState("start")
    },[])
    //const board = useContext(BoardContext)
    const style = {backgroundColor:"#152238",fontSize:"15px",textAlign:"center",height:"30px",width:"30px", color:"cyan",textAlign:"center"}
    
    return (
        <div className="uncovered-tile-font" style= {style}>{TileValue=="*"?<img height="15px" width="15px" src={mine}/>:TileValue}</div>

    )  
}


export default UncoveredTile