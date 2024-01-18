import { Link } from 'react-router-dom';
import './SudukoStyle.css'



var board = [];

function createBoard(){
  board = [];
  for(let i = 0; i< 9; i++){
    var row = [];
    for(let j = 0; j< 9; j++){
      row.push([("row-"+i+"-cell-"+j), ("row-"+i), ("cell-"+j)]);
    }
    board.push([row])
    row=[]
  }
}

function sudukoHTML() {
  createBoard();
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
                //console.log(theRows);
                return <div className="row"> 
                  {theRows.map(([cellID, row, cell]) => {
                    //console.log([cellID, row, cell]);
                    return <div className={`cell ${row} ${cell}`} id={`${cellID}`}>0</div>
                  })}
                </div>
              })}
          </div>
        </div>

      </section>
    </div>
  );
}
//{board.map((obj) => (
//
//${obj.row} cell ${obj.cell}, ${obj.cellID}
export default sudukoHTML;