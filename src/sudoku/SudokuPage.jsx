import '../app/App.css';
import './SudokuStyle.css'
import { Link } from 'react-router-dom';
import SudokuBoardComponent from './SudokuBoardComponent';


export function SudokuPage(){
  return (
    <div className="suduko-page">
    <section className='section-heading'>
      <div className='heading'>
        <h1 className="title">Suduko</h1>
      </div>
    </section>

    <section className='section-page'>
      <Link to={'/home'} className='link-home link-style-1'> Click here to go home!</Link>
      <div className='sudoku-board-container'>
        {SudokuBoardComponent()}
      </div>
      <button 
      className="button1" 
      id="generate-board">
        Generate New Game
        </button>
      <button>Submit</button>
    </section>
  </div>
  );
};

export default SudokuPage;