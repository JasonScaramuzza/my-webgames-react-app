/* eslint-disable no-sequences */
import './SudokuStyle.css'
import { useState, useEffect } from 'react';

const SudokuBoardComponent = () =>  {
  const [boardOne, setBoardOne] = useState([
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
  const [solution, setSolution] = useState([
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
  const [lockedCells, setLockedCells] = useState([
    [false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false]
  ]);

  useEffect(() => {
    initialiseGameFromAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  //fetch initial board from API
  async function requestBoard(){
    const res = await fetch(
      `https://sudoku-api.vercel.app/api/dosuku`
    );
    const json = await res.json();
    return json;
  }

  //ininitialise board
  async function initialiseGameFromAPI(){
    const newSudokuGame = await requestBoard();

    //console.log(newSudokuGame);
    //var abc = [];
    newSudokuGame.newboard.grids.map((game) => (
      //console.log(newSudokuGame.newboard.grids),
      setBoardOne(game.value),
      //console.log(boardOne),
      setSolution(game.solution),
      //setLockedCells(formatLockedCells(game.value))
      formatLockedCells(game.value)
      //console.log(lockedCells)
    ));
  }

  async function formatLockedCells(initialBoard){
    var newArr = [];
    var newArr2 = [];
      initialBoard.forEach((row, rowIndex) => {
          row.forEach((cell, columnIndex) => {
            if(cell === 0){
              newArr2.push(false);
            }else{
              newArr2.push(true);
            }
          })
          newArr.push(newArr2);
          newArr2 = [];
      })
    setLockedCells(newArr);
  }



  //validate board state is complete and game is completed (1-9 in all rows, column and boxes) (activated on button click)

  //refresh game to new game (activated on button click)


  function updateCellChange(newValue, oldRowIndex, oldColumnIndex){
      const updatedBoard = (
        boardOne.map((row, rowIndex) => {
          return(row.map((cell, columnIndex) => {
            if((rowIndex === oldRowIndex)&&(columnIndex === oldColumnIndex)){
              if(newValue < 1 || newValue > 9){
                return cell;
              }else{
                return (newValue);
              }
            }else{
              return cell;
            }
          }))
        })
      );
      setBoardOne(updatedBoard);
  }

  return (
    //console.log(lockedCells),
    <div>
        {boardOne?.map((row, rowIndex) => {
          return(
          <div className="row" key={rowIndex}> 
            {row.map((cell, columnIndex) => {
              //console.log(lockedCells[rowIndex][columnIndex])
              return(             
                <input
                    key={rowIndex + "-" + columnIndex}
                    onChange={e => updateCellChange(e.target.value, rowIndex, columnIndex)}
                    className={`cell row-${rowIndex} column-${columnIndex}`}
                    id={`row-${rowIndex}column-${columnIndex}`} 
                    value={cell} 
                    readOnly={lockedCells[rowIndex][columnIndex]}
                    maxLength="1"
                    type='number'>
                </input>
              );
            })}
          </div>
          )
        })}
    </div>
  );
};

export default SudokuBoardComponent;