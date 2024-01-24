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
        row.push(
          <Cell 
            row={("row-"+i)} 
            cell={("cell-"+j)} 
            cellID={("row-"+i+"-cell-"+j)} 
            cellValue={0} 
            cellReadOnly={false}>
          </Cell>
        )

      }
      board.push([row])
      row=[]
    }
    setBoardOne(board);
  }

  return (
    <div>
        {boardOne.map(([theRows]) => {
          return(
          <div className="row"> 
            {theRows.map((cell) => (
              <Cell
                row={cell.row}
                cell={cell.cell}
                cellID={cell.cellID}
                cellValue={cell.cellValue}
                cellReadOnly={cell.cellReadOnly}
                key={cell.cellID}>
              </Cell>
            ))}
          </div>
        )})}
    </div>
  );
};

export default SudukoBoardComponent;