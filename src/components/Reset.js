import React,{useState,useEffect,useContext} from 'react';
import ReactDom from 'react-dom';
import { BoardResetContext } from './PreApp';

const Reset = ()=>{

    const style = {position: 'absolute', top:'100px',left:'410px',backgroundColor:'red',height:'30px',width:'30px',textAlign:'center',color:"white"}
    const BoardReset = useContext(BoardResetContext) 
    return (
        <div onClick= {()=>{BoardReset()}}style= {style}>
            {"R"}
        </div>
        )  
}


export default Reset