import { Link } from 'react-router-dom';
import './App.css';

//MAIN PAGE

function App() {
  return (
    <div>
        <section className='header'>
          <h1>Jason Scaramuzza's Web Games</h1>
          <p>Welcome to my webpage. Here, you can play about with some games I've made in React. Enjoy!</p>
        </section>
        <section className='page'>      
        <Link to={'/suduko'}> Click here to play suduko!</Link>
        </section>
    </div>
  );
}

export default App;