import React,{useContext,useEffect,useState} from 'react'


import { CountedMinesContext,GameOverContext } from './PreApp'

import Timer from './Timer'

function Info(){
    const Mines = useContext(CountedMinesContext)
    const gameOver = useContext(GameOverContext)
    
    return(<div style={{color:"red",top:"100px",left:"460px",position:"relative",display:"grid",gridTemplateColumns:"200px 200px 200px"}}>
        <div>
            {Mines}
        </div>
        <div>
        {
            gameOver?"Game Over":null
        }
        </div>
        <div>
            <Timer/>
        </div>

        
        
    </div>)
}


export default Info;