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

    newSudokuGame.newboard.grids.map((game) => (
      setBoardOne(game.value),
      setSolution(game.solution),
      formatLockedCells(game.value)
    ));
  }

  //Replace 0 with empty
  async function formatInitialBoard(initialBoard){
    var boardArr = [];
    var rowArr2 = [];

    initialBoard.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
          if(cell === 0){
            rowArr2.push(0);
          }else{
            rowArr2.push(cell);
          }
        })
        boardArr.push(rowArr2);
        rowArr2 = [];
    })
    setBoardOne(boardArr);
  }


  async function formatLockedCells(initialBoard){
    var boardArr = [];
    var rowArr2 = [];

    initialBoard.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
          if(cell === 0){
            rowArr2.push(false);
          }else{
            rowArr2.push(true);
          }
        })
        boardArr.push(rowArr2);
        rowArr2 = [];
    })
    setLockedCells(boardArr);
  }



  //validate board state is complete and game is completed (1-9 in all rows, column and boxes) (activated on button click)

  //refresh game to new game (activated on button click)


  function updateCellChange(newValue, oldRowIndex, oldColumnIndex){
      const updatedBoard = (
        boardOne.map((row, rowIndex) => {
          return(row.map((cell, columnIndex) => {
            if((rowIndex === oldRowIndex)&&(columnIndex === oldColumnIndex)){
              if(newValue < 0 || newValue > 9){
                return cell
              }else if(newValue === null || newValue === ''){
                return ''
              }else{
                return (parseInt(newValue));
              }
            }else{
              return cell;
            }
          }))
        })
      );
      console.log(boardOne)
      setBoardOne(updatedBoard)
  }

  return (
    <div>
        {boardOne?.map((row, rowIndex) => {
          return(
          <div className="row" key={rowIndex}> 
            {row.map((cell, columnIndex) => {
              var modifiedCell = cell;
              if(cell === 0){
                modifiedCell = '';
              }
              return(
                <input
                    key={rowIndex + "-" + columnIndex}
                    onChange={e => updateCellChange(e.target.value, rowIndex, columnIndex)}
                    className={`cell row-${rowIndex} column-${columnIndex}`}
                    id={`row-${rowIndex}column-${columnIndex}`} 
                    value={modifiedCell} 
                    readOnly={lockedCells[rowIndex][columnIndex]}
                    maxLength={1}
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