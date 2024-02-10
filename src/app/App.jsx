import { Link } from 'react-router-dom';
import './App.css';

const NAVBAR = ["Jason Scaramuzza","Projects","About","Contact","LinkedIn","Indeed Resume","Github"];

//MAIN PAGE

function App() {
  return (
    <div className="main-page">
      <section id="nav-bar">
        <nav>
          <ul>
            <li>
              <h1><a href="home">{NAVBAR[0]}</a></h1>
            </li>
            <li><a href="#projects">{NAVBAR[1]}</a></li> 
            <li><a href="about">{NAVBAR[2]}</a></li>
            <li><a href="#contact-me">{NAVBAR[3]}</a></li>
            <li>
              <a 
                href="https://www.linkedin.com/in/jason-scaramuzza-842ba8181/" 
                target="_blank">
                {NAVBAR[4]}
              </a>
            </li>
            <li>
              <a 
                href="https://profile.indeed.com/p/jasons-vd2jcl7"
                target="_blank">
                {NAVBAR[5]}
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/JasonScaramuzza"
                target="_blank">
                {NAVBAR[6]}
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <section id="intro">
        <p className="name">Hi my name is <span>Jason Scaramuzza.</span></p>
        <h2>I'm a software engineer.</h2>
        <p> I specialize in frontend development with experience in HTML, 
            CSS, JavaScript and React </p>
        <p>Currently I am engaged in work expereince at a Risk Management SaaS 
            organisation Riskwell whilst looking for a job.</p>
      </section>

      <section id="contact-me">
        <h2>Contact me</h2>
        <p>I'm always interested in hearing about new job opportunities, 
          learning new languages and new design techniques.</p>
        <p><a href="mailto:jason.scaramuzza@gmail.com">Email me</a></p>
      </section>
    </div>
  );
}

export default App;
