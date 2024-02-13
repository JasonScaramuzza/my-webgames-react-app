/* eslint-disable no-sequences */
import { useState, useEffect } from 'react';
import SudokuModalSuccess from './SudokuModalSuccess';
import SudokuModalFail from './SudokuModalFail';
import './SudokuGame.css'

const SudokuGame = () =>  {
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
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [failModalOpen, setFailModalOpen] = useState(false);

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
    console.log(json.newboard.grids);
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
        if (cell === 0) {
          rowArr2.push(false);
        } else {
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
      setSuccessModalOpen(true);
    }else{
      setFailModalOpen(true);
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
  }

  const handleModalButtonClick = () => {
    setSuccessModalOpen(false);
    setFailModalOpen(false);
  }

  return (
    <div id="sudoku-game-component-container">
      <section id="board">
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
                  type='numeric'>
                </input>
              );
            })}
          </div>
          )
        })}
      </section>

      <section id="sudoku-options">
        <button 
          onClick={() => initialiseGameFromAPI()}
          className="button-new-game button-style-1" 
          id="button-new-game">
          New Game
        </button>
        <button
          onClick={() => checkResults()}
          className="button-submit button-style-1"
          id="button-submit">
          Submit
        </button>
      </section>

      <section id="modals">
      {successModalOpen && (
        <SudokuModalSuccess
          onPlayAgain={() => {
            handleModalButtonClick();
            initialiseGameFromAPI();
          }} 
          onCancel={ () => {
            handleModalButtonClick();
          }}
          onClose={() => {
            handleModalButtonClick();
          }}>
          <h2>Success</h2>
          <p>Congratulations, you completed the Sudoku!</p>
        </SudokuModalSuccess>
      )}
      {failModalOpen && (
        <SudokuModalFail
          onClose={() => {
            handleModalButtonClick();
          }}>
          <h2>Incorrect</h2>
          <p>Keep going, you can do it!</p>
        </SudokuModalFail>
      )}
      </section>
    </div>
  );
};

export default SudokuGame;