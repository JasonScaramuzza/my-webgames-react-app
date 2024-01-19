import { Link } from 'react-router-dom';
import './SudukoStyle.css'
import { useState } from 'react';


var board = [];

function createBoard(){
  board = []
  for(let i = 0; i< 9; i++){
    var row = [];
    for(let j = 0; j< 9; j++){
      row.push([("row-"+i+"-cell-"+j), ("row-"+i), ("cell-"+j), 0]);
    }
    board.push([row])
    row=[]
  }
  return(board)
}


const SudukoHTML = () =>  {
  const [boardOne, setBoardOne] = useState([[4]]);
  //setBoardOne(createBoard());
  createBoard()
  return (
    <div className="suduko-page">
      <section className='section-heading'>
        <div className='heading'>
          <h1 className="title">Suduko</h1>
          <Link to={'/home'} className='link-home link-style-1'> Click here to go home!</Link>
        </div>
      </section>

      <section className='section-page'>
        <div className="page">
          <div>
              {board.map(([theRows]) => {
                return(
                <div className="row"> 
                {theRows.map(([cellID, row, cell, cellValue]) => {
                  return(
                    <div className={`cell ${row} ${cell}`} id={cellID}>
                      <input 
                      className="input-style-1" 
                      id={`input-${cellID}`} 
                      value={cellValue} 
                      maxLength="1"
                      type='number'
                      ></input>
                    </div>
                  )
                })}
                </div>
              )})}
          </div>
          <button className="button1" id="generate-board">Generate</button>
        </div>
      </section>
    </div>
  );
}
//{board.map((obj) => (
//
//${obj.row} cell ${obj.cell}, ${obj.cellID}
export default SudukoHTML;