/* eslint-disable no-sequences */
import './SudokuStyle.css'
import { useState, useEffect } from 'react';

const SudokuBoardComponent = () =>  {
  const [board, setBoard] = useState([
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
    const res = await fetch(                    //XXX Need to catch errors and display loading progress to user
      `https://sudoku-api.vercel.app/api/dosuku`
    );
    const json = await res.json();
    return json;
  }

  //ininitialise board
  async function initialiseGameFromAPI(){
    const newSudokuGame = await requestBoard();

    newSudokuGame.newboard.grids.map((game) => (
      setBoard(game.value),
      setSolution(game.solution),
      formatLockedCells(game.value)
    ));
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

  function checkResults(){
    if(solution.join() === board.join()){
      console.log(true);
      return true;
    }else{
      console.log(false);
      return false;
    }
  }

  function updateCellChange(newValue, oldRowIndex, oldColumnIndex){
      const updatedBoard = (
        board.map((row, rowIndex) => {
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
      setBoard(updatedBoard)
      console.log(board)
      console.log(solution)
  }

  return (
    <div>
        {board?.map((row, rowIndex) => {
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
        <button 
          onClick={() => initialiseGameFromAPI()}
          className="button-new-game" 
          id="button-new-game">
          New Game
        </button>
        <button
          onClick={() => checkResults()}
          className="button-submit"
          id="button-submit">
          Submit
        </button>
    </div>
  );
};

export default SudokuBoardComponent;