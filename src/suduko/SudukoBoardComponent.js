import './SudukoStyle.css'
import { useState, useEffect } from 'react';
import { Cell } from './Cell';


const SudukoBoardComponent = () =>  {
  const [boardOne, setBoardOne] = useState([]);


  useEffect(() => {
    initialiseBoard();
  }, [])


  function initialiseBoard(){
    var board = []
    for(let i = 0; i< 9; i++){
      var row = [];
      for(let j = 0; j< 9; j++){
        row.push(new Cell((i), (j), ("row-"+i+"-column-"+j), 0, false))
      }
      board.push(row)
      row=[]
    }
    setBoardOne(board);
  }


  function updateCellChange(newValue, oldCell){
      const updatedBoard = boardOne.map((rows) => {
        return(rows.map((cell) => {
          if(cell.cellID === oldCell.cellID){
            if(newValue < 0 || newValue > 9){
              return cell;
            }else{
              return (new Cell(oldCell.row, oldCell.column,  oldCell.cellID, newValue, oldCell.cellReadOnly));
            }
          }else{
            return cell;
          }
        }))
      });
      setBoardOne(updatedBoard);
  }


  return (
    <div>
        {boardOne.map((theRows) => {
          return(
          <div className="row"> 
            {theRows.map((cell) => {
              return(
                <input
                    onChange={e => updateCellChange(e.target.value, cell)}
                    className={`cell row-${cell.row} column-${cell.column}`}
                    id={`${cell.cellID}`} 
                    value={cell.cellValue} 
                    readOnly={cell.cellReadOnly}
                    maxLength="1"
                    type='number'>
                    {cell.Value}
                </input>
              )
            })}
          </div>
          )
        })}
    </div>
  );
};

export default SudukoBoardComponent;