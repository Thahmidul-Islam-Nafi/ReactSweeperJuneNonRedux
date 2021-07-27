
const ArraySize = 256;
const BombNumber = 40;

let InitialBoardArray = Array.from(new Array(256),()=>"0");

const reinitialize = ()=>{
    InitialBoardArray = Array.from(new Array(256),()=>"0");
}

const generateBombs = ()=> {
    let count = 0
    
    let bombedArray = new Array(256).fill("0")
    
    while(bombedArray.filter(value=>value==="*").length<BombNumber){
        let randomIndex = Math.floor(Math.random()*ArraySize)
        let BombCache = []
        if (InitialBoardArray[randomIndex]!=="*" && bombedArray.filter(value=>value==="*").length<BombNumber && !BombCache.includes(randomIndex)){
            bombedArray[randomIndex]="*"
            
            BombCache.push(randomIndex)
            
            //console.log(
               // `count is ${count}`
           // )
        }
        
    }
    return bombedArray
}

//console.log(generateBombs())

function gridify(oneDArray){
    let side = Math.sqrt(oneDArray.length)
    let gridified = []
    let locIndex = 0
    for (let i = 0;i<side;i++){
        let temp =[];
        for (let j = 0;j<side;j++){

            //temp.push(oneDArray[locIndex])  for grids as entire objects
            temp.push(oneDArray[locIndex].value) 
            locIndex++
            //console.log(locIndex)
        }
        gridified.push(temp)
    }
    return gridified
}


function gridifyAsObjects(baseArray){
    let side = Math.sqrt(baseArray.length)
    let gridifiedObjects = []
    let locIndex = 0
    for (let i = 0;i<side;i++){
        
        for (let j = 0;j<side;j++){
            gridifiedObjects.push(
                
                {
                "value":baseArray[locIndex],
                "position":[j,i]
                
                }
                )
            
            locIndex++
            //console.log(locIndex)
        }
        
    }
    return gridifiedObjects
}

function mapToSingleIndex(inputPosition){
    let [x,y] = inputPosition
    return (16*y+x)
}

function getNeighbours(indexOfItem, arrayToSearch){
    let [x,y] = indexOfItem
    //console.log(x,y)
    let neighbours = []
    let positionquery = [[x-1,y-1],
    [x,y-1],[x+1,y-1],[x-1,y],[x+1,y],[x-1,y+1],[x,y+1],[x+1,y+1]]


    //console.log(positionquery)

    arrayToSearch.forEach((value,index)=>{
        let [valueX,valueY] = value.position
        //console.log(value)
        
        positionquery.forEach((positionvalue)=>{
            if(positionvalue[0]==valueX && positionvalue[1]==valueY){
            
                neighbours.push(value)
            }
    
        })
    })
    let singleIndexNeighBours = neighbours.map((item)=>{return {value:item.value,position:mapToSingleIndex(item.position)}})
    return [neighbours,singleIndexNeighBours]
}



//console.log(mapToSingleIndex([6,6]))

function mapToDoubleIndex(value){
    return([value%16,(value-(value%16))/16])
}


function generateBoardNumbers(){
    let generatedNumberedBoard = []

    let preGenerated  = gridifyAsObjects(generateBombs())
    
    preGenerated.forEach((value)=>{

        if(value.value !== "*"){
        let numberedValue = Number(value.value)
        let neighbourValues = getNeighbours(value.position,preGenerated)[0]

        neighbourValues.forEach((value)=>{

            if (value.value === "*")
                {
                    numberedValue++
                }
        })
        value.value = String(numberedValue)
        }
    })

    return preGenerated
}

//console.log(generateBombs().filter((value=>value==="*")).length)
// console.log("\n\n\n\n\n")
// console.table(gridify(generateBombs()))

// console.table(gridifyAsObjects(generateBombs()))


let bombGenerated = generateBombs()
let gridifiedBombs = gridifyAsObjects(bombGenerated)

//console.log(getNeighbours([6,7],gridifiedBombs))
console.log(getNeighbours([2,0], gridifyAsObjects(generateBombs())))


// let [x,y] = [6,7]
// let positionquery = [[x-1,y-1],
//     [x,y-1],[x+1,y-1],[x-1,y],[x+1,y],[x-1,y+1],[x,y+1],[x+1,y+1]]

// console.log(positionquery)    
// console.log(positionquery.length)
// console.log(positionquery.includes(([7,6])))

// console.log(positionquery[2][0]===7 && positionquery[2][1]==6)


//console.table(gridify(generateBoardNumbers()))


//console.table(gridify(generateBoardNumbers()))

function generateBoardNumbersAndState(){
    let generatedNumberedBoard = []

    let preGenerated  = gridifyAsObjects(generateBombs())
    
    preGenerated.forEach((value)=>{

        if(value.value !== "*"){
        let numberedValue = Number(value.value)
        let neighbourValues = getNeighbours(value.position,preGenerated)[0]

        neighbourValues.forEach((value)=>{

            if (value.value === "*")
                {
                    numberedValue++
                }
        })
        value.value = String(numberedValue)
        }
    })

    const generatedBoardWithState= preGenerated.map((value,index)=>{return {...value,flag:false,uncovered:false,id:String(index)}})
    return generatedBoardWithState
}

export {generateBoardNumbers,mapToSingleIndex, reinitialize,BombNumber,getNeighbours,mapToDoubleIndex,generateBoardNumbersAndState}

console.log(generateBoardNumbers())

console.log(generateBoardNumbersAndState())