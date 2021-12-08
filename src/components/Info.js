import React,{useContext,useEffect,useState} from 'react'


import { CountedMinesContext} from './PreApp'

import mine from "../img/mine.png"

import Timer from './Timer'
import Reset from './Reset'
import Flag from './Flag'
function Info(){
    const Mines = useContext(CountedMinesContext)
    
    
    return(<div className="top-font" style={{color:"red",display:"flex",justifyContent:'space-between',alignItems:'center', margin:"0px 0px 20px 0px",width:"530px"}}>
       
        <div>
            <Timer/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:"auto auto",gridColumnGap:"10%"}}>
        
        
        <Reset/>
        <Flag/>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={mine} alt="Mines =" height="30px" width="30px" style={{paddingRight:"10px"}}/>
            <div style= {{color:"cyan"}}>
            {Mines}
            </div>
        </div>

        
        
    </div>)
}


export default Info;