import '../app/App.css';
import './SudokuStyle.css'
import { Link } from 'react-router-dom';
import SudokuBoardComponent from './SudokuBoardComponent';


export function SudokuPage(){
  return (
    <div className="suduko-page">
    <section className='section-heading'>
      <div className='heading'>
        <h1 className="title">Sudoku</h1>
      </div>
    </section>

    <section className='section-page'>
      <Link to={'/home'} className='link-home link-style-1'> Click here to go home!</Link>
      <div className='sudoku-game-container'>
        {SudokuBoardComponent()}
      </div>
    </section>
  </div>
  );
};

export default SudokuPage;