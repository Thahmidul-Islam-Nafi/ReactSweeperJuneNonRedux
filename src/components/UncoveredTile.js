import React,{useContext, useEffect} from 'react';
import { BoardContext} from './PreApp';
import { SetTimerStateContext } from './PreApp';

const UncoveredTile = ({TileValue})=>{
    const setTimerState = useContext(SetTimerStateContext)
    useEffect(()=>{
        setTimerState("start")
    },[])
    //const board = useContext(BoardContext)
    const style = {backgroundColor:"red",fontSize:"15px",textAlign:"center",height:"30px",width:"30px", color:"white",textAlign:"center"}
    
    return (
        <div style= {style}>{TileValue}</div>

    )  
}


export default UncoveredTile