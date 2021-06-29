import React from 'react';



const UncoveredTile = (props)=>{

    const style = {backgroundColor:"red",fontSize:"15px",textAlign:"center",height:"25px",width:"25px" }
    let tileNumber = "9"; 
    return (
        <div style= {style}>{tileNumber}</div>

    )  
}


export default UncoveredTile