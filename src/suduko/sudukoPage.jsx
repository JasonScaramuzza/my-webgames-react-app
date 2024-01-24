import '../app/App.css';
import './SudukoStyle.css'
import { Link } from 'react-router-dom';
import SudukoBoardComponent from './SudukoBoardComponent';


export function SudukoPage(){
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
          {SudukoBoardComponent()}
        </div>
        <button className="button1" id="generate-board">Generate</button>
      </div>
    </section>
  </div>
  );
};

export default SudukoPage;