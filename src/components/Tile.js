import React from 'react';

import CoveredTile from './CoveredTile';
import UncoveredTile from './UncoveredTile';

const Tile = ({TileRevealed,index,TileValue})=>{

    //console.log(TileRevealed)

    const style = {color:"#152238",height:"28px",width:"28px",
    
    
}







    
    return (
        <div key={index} style= {style}>

            {TileRevealed ?  <UncoveredTile key={index} index={index} TileValue={TileValue}/> : <CoveredTile key={index}index={index}/>}
            
            </div>

    )  
}


export default Tile