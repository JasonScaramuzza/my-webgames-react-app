import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import './App.css';


const NAVBAR = ["Jason Scaramuzza","Projects","About","Contact","LinkedIn","Github","Indeed Resume"];

//MAIN PAGE

function App() {
  return (
    <div className="main-page">
      <section id="nav-bar">
        <nav>
          <ul>
            <li>
              <h1>
                <a href="home">
                  <FontAwesomeIcon icon={faCubes} aria-hidden="true"/>
                  <span>{NAVBAR[0]}</span>
                </a>
              </h1>
            </li>
            <li><a href="#projects">{NAVBAR[1]}</a></li> 
            <li><a href="about">{NAVBAR[2]}</a></li>
            <li><a href="#contact-me">{NAVBAR[3]}</a></li>
            <li>
              <a 
                href="https://www.linkedin.com/in/jason-scaramuzza-842ba8181/" 
                target="_blank">
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true"/> 
                <span class="sr-only">{NAVBAR[4]}</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/JasonScaramuzza"
                target="_blank">
                <FontAwesomeIcon icon={faGithub} aria-hidden="true"/>
                <span class="sr-only">{NAVBAR[5]}</span>
              </a>
            </li>
            <li>
              <a 
                href="https://profile.indeed.com/p/jasons-vd2jcl7"
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
