import React,{useState,useEffect, useContext} from 'react';
import ReactDom from 'react-dom';

import { FlagONContext,ToggleFlagContext,SetTimerStateContext } from './PreApp';
const Flag = ()=>{
    const toggleFlag = useContext(ToggleFlagContext)
    const flagON = useContext(FlagONContext)
    const style = {position: 'absolute', top:'100px',left:'930px',backgroundColor:'red',height:'30px',width:'30px',textAlign:'center',fontWeight:"bold",color:!flagON?"white":"darkBlue"}
    //console.log(onPressed) 
    const setTimerState = useContext(SetTimerStateContext)
    
    return (
        
        <div style = {style} onClick= {()=>{toggleFlag();setTimerState("start")}}>
            {"F"}
        </div>
        )  
}


export default Flag