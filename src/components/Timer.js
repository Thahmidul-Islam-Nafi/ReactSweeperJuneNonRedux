import React,{useState,useEffect,createContext, useContext} from 'react'
import {TimerStateContext, SetGameOverContext, SetTimerStateContext} from './PreApp'

let timerID;
const Timer = ()=>{
    const [timerValue,setTimerValue] = useState(0)
    const [hasStarted,setHasStarted] =useState(false)
    const timerState = useContext(TimerStateContext)
    const setTimerState = useContext(SetTimerStateContext)
    const style = {color:"red"}
    useEffect(()=>{
        console.log(timerState)
        if(timerState==="start"){
            startTimer()
        }
        if(timerState==="stop"){
            stopTimer()
            setTimerState("stop")
        }
        if(timerState==="reset"){
            resetTimer()
        }
    },[timerState])

    function modifiedTimer(input){

        let seconds=timerValue%60
        let minutes = Math.floor(timerValue/60)%60
        let hours = Math.floor(timerValue/3600)%60


        let hourzeroplacer=hours>9?"":"0"
        let minutezeroplacer=minutes>9?"":"0"
        let secondzeroplacer=seconds>9?"":"0"
        return hourzeroplacer+(String(hours)+":"+minutezeroplacer+String(minutes)+":"+secondzeroplacer+String(seconds))
    }
    function startTimer(){
        if (hasStarted!==true)
        {
           timerID = setInterval(
                ()=>{setTimerValue((prevalue)=>prevalue+1)},1000)
            
            setHasStarted(true)   
            console.log(timerID)
        }
        
    }
    function stopTimer(){
        
        console.log(timerID)
        clearInterval(timerID)
        

    }

    function resetTimer(){
       
            stopTimer()
        setTimerValue(0)   
        setHasStarted(false)  
             
    }

    return (
       <div style={style}>
            <div>
            {modifiedTimer(timerValue)}
        </div>
        

       </div>
    )

}



export default Timer;