import React, { useContext } from "react";
import {
  BoardContext,
  SetBoardContext,
  SetMinesContext,
  CountedMinesContext,
  FlagONContext,
  GameOverContext,
  SetGameOverContext,
} from "./PreApp";
import {
  getNeighbours,
  mapToDoubleIndex,
  mapToSingleIndex,
} from "../Boardlogic";
import { TimerStateContext, SetTimerStateContext } from "./PreApp";
import flagred from "../img/flagred.png"
const CoveredTile = ({ index }) => {
  const timerState = useContext(TimerStateContext);
  const setTimerState = useContext(SetTimerStateContext);
  const board = useContext(BoardContext);
  const style = {
    backgroundColor: "#152238",
    color: "red",
    height: "28px",
    width: "28px",
    textAlign: "center",
    borderRadius: "5px",
    boxShadow:
      "-1px 1px 2px rgba(8, 14, 22, 0.2), 1px -1px 2px rgba(8, 14, 22, 0.2), -1px -1px 2px rgba(34, 54, 90, 0.9), 1px 1px 3px rgba(8, 14, 22, 0.9), inset 1px 1px 2px rgba(34, 54, 90, 0.3), inset -1px -1px 2px rgba(8, 14, 22, 0.5)",
  };
  const setBoard = useContext(SetBoardContext);
  const setMines = useContext(SetMinesContext);
  const MineNumber = useContext(CountedMinesContext);
  const GameOver = useContext(GameOverContext);
  const SetGameOver = useContext(SetGameOverContext);
  const FlagON = useContext(FlagONContext);
  //console.log(board[index])
  //console.log(getNeighbours(mapToDoubleIndex(index),board)[1])
  // const RevealCells = (TileIndex) => {
  //     let entries = []
  //     console.log("Clicked");
  //     const listofNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //     if (listofNumbers.includes(board[TileIndex].value)) {
  //       setBoard((prevBoard) => {
  //         prevBoard.map((value, index) => {
  //           if (index === TileIndex) {
  //             console.log(value)
  //             return { ...value, uncovered: true };
  //             entries.push([value.id,value.position,value.value])
  //           } else {
  //             return { ...value, uncovered: false };

  //           }
  //         });
  //       });
  //     }
  //     if (board[TileIndex].value === "*") {
  //       setBoard((prevBoard) => {
  //         prevBoard.map((value, index) => {
  //           console.log(value)
  //           return { ...value, uncovered: true };
  //           entries.push([value.id,value.position,value.value])

  //         });
  //       });
  //     }
  //     if (board[TileIndex].value === "0") {
  //       let neighbourTiles = getNeighbours(mapToDoubleIndex(TileIndex))[1];
  //       setBoard((prevBoard) => {
  //         prevBoard.map((value, index) => {
  //           if (index === TileIndex) {
  //             console.log(value)
  //             return { ...value, uncovered: true };
  //             entries.push([value.id,value.position,value.value])
  //           } else {
  //             return { ...value, uncovered: false };
  //           }
  //         });
  //       });
  //       neighbourTiles.map((value) => {

  //         RevealCells(value.position);

  //       });
  //     }
  //     console.log(entries)
  //   };
  function setTile(ind) {
    setBoard((prevBoard) => {
      let newBoard = [...prevBoard];
      newBoard[ind].uncovered = true;
      return newBoard;
    });
  }
  function setTileFlag(indTile) {
    //console.log("setTileFlag Running")
    //console.log(typeof board[ind].flag)
    //console.log(board[ind].flag)
    if (MineNumber > 0) {
      setBoard((preBoard) => {
        let newBoard = [...preBoard];

        const newBoardTile = { ...newBoard[indTile] };

        const modifiednewBoardTile = {
          ...newBoardTile,
          flag: !newBoardTile.flag,
        };

        newBoard[indTile] = modifiednewBoardTile;

        return newBoard;
      });
    }
    if (board[indTile].flag === false) {
      if (MineNumber > 0) {
        setMines((prevMine) => prevMine - 1);
      }
    } else {
      if (MineNumber < 40) {
        setMines((prevMine) => prevMine + 1);
      }
    }
  }
  function RevealCells(CellIndex) {
    let listofNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // let listofIndices = [9,20,19,17,1,0,11,25]
    // let listofIndicestwo =[255,99,88,77,66]
    // listofIndices.forEach((value)=>{
    //     setBoard((prevBoard)=>{
    //         return prevBoard.map((Mapvalue)=>{

    //             if(value===mapToSingleIndex(Mapvalue.position)){
    //                 console.log(Mapvalue.position)
    //                 console.log(mapToSingleIndex(Mapvalue.position))
    //                 return {...Mapvalue,uncovered:true}
    //             }
    //             else{
    //                 return Mapvalue
    //             }
    //         })
    //     })
    // })

    // listofIndicestwo.forEach((value)=>{
    //     setBoard((prevBoard)=>{
    //         return prevBoard.map((Mapvalue)=>{

    //             if(value===mapToSingleIndex(Mapvalue.position)){
    //                 console.log(Mapvalue.position)
    //                 console.log(mapToSingleIndex(Mapvalue.position))
    //                 return {...Mapvalue,uncovered:true}
    //             }
    //             else{
    //                 return Mapvalue
    //             }
    //         })
    //     })
    // })

    if (
      board[CellIndex].uncovered === false &&
      board[CellIndex].flag === false
    ) {
      if (listofNumbers.includes(board[CellIndex].value)) {
        setTile(CellIndex);
      }
      if (board[CellIndex].value === "*") {
        SetGameOver(() => true);

        board.forEach((value) => {
          setTile(mapToSingleIndex(value.position));
        });
      }
      if (board[CellIndex].value === "0") {
        //console.log("reached 0")
        setTile(CellIndex);
        let neighbouringTiles = getNeighbours(
          mapToDoubleIndex(CellIndex),
          board
        )[1];

        neighbouringTiles.forEach((value) => {
          if (value.value !== "*") {
            //console.log("reached neighbouring tiles loop")
            // console.log(value)
            // console.log(value.position)
            if (board[value.position].uncovered === false) {
              //console.log(value)
              //console.log(value)
              if (Number(value.value) % 3 === 0) {
                setTimeout(() => RevealCells(value.position), 4);
              } else {
                RevealCells(value.position);
              }
            }
          }
        });
      }
    }
  }

  return (
    <div
      style={style}
      onClick={() => {
        FlagON ? setTileFlag(index) : RevealCells(index);
      }}
    >
      {board[index].flag?<img src={flagred} alt="" height = "10px" width = "10px"/>:""}
    </div>
  );
};

export default CoveredTile;
