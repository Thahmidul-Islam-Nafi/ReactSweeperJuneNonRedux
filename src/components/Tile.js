import React from 'react';

import CoveredTile from './CoveredTile';
import UncoveredTile from './UncoveredTile';

const Tile = ({TileRevealed,index,TileValue})=>{

    //console.log(TileRevealed)

    const style = {color:"blue",
    backgroundColor:"green",height:"30px",width:"30px",
    
    
}







    
    return (
        <div key={index} style= {style}>

            {TileRevealed ?  <UncoveredTile key={index} index={index} TileValue={TileValue}/> : <CoveredTile key={index}index={index}/>}
            
            </div>

    )  
}


export default Tile