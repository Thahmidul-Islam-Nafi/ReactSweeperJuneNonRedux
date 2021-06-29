import React from 'react';

import CoveredTile from './CoveredTile';
import UncoveredTile from './UncoveredTile';

const Tile = (props)=>{

    const style = {color:"blue",
    backgroundColor:"green",height:"25px",width:"25px",
    
    
}






    let tileObject = {

        checked:true,
        flagged:false,
        hasMine:false,
        Number:false,
        coords:[0,0]


    }
    
    return (
        <div style= {style}>

            {tileObject.checked ?  <UncoveredTile/> : <CoveredTile/>}
            
            </div>

    )  
}


export default Tile