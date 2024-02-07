import { Link } from 'react-router-dom';
import './App.css';

//MAIN PAGE

function App() {
  return (
    <div className='main-page'>
        <section className='header'>
          <h1 className='title'>Jason Scaramuzza's Web Games</h1>
          <p className="intro">Welcome to my webpage. Here, you can play about 
            with some games I've made in React. Enjoy!</p>
        </section>
        <section className='page'>
          <h2 className="h2-style-1">Personal Projects</h2>   
          <Link to={'/sudoku'}> Click here to play sudoku!</Link>
          <h2 className="h2-style-1">Online Courses Exercises</h2>
          <Link to={'/portfolioProject'}> FrontendMasters 'Getting Started with CSS' - Portfolio project</Link>
        </section>
    </div>
  );
}

export default App;