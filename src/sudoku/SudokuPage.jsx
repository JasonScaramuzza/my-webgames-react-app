import './SudokuStyle.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import SudokuBoardComponent from './SudokuBoardComponent';

const NAVBAR = ["Jason Scaramuzza","Projects","About","Contact","LinkedIn","Github","Indeed Resume"];

export function SudokuPage(){
  return (
    <div className="suduko-page">
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
                target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true"/> 
                <span class="sr-only">{NAVBAR[4]}</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/JasonScaramuzza"
                target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} aria-hidden="true"/>
                <span class="sr-only">{NAVBAR[5]}</span>
              </a>
            </li>
            <li>
              <a 
                href="https://profile.indeed.com/p/jasons-vd2jcl7"
                target="_blank" rel="noreferrer"
                class="link-style-button">
                {NAVBAR[6]}
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <div class="gradient-1"></div>

      <section id='sudoku-intro'>
        <div className='heading'>
          <h2 className="title">Sudoku</h2>
        </div>
      </section>

      <section className='section-page'>
        <div className='sudoku-game-container'>
          {SudokuBoardComponent()}
        </div>
      </section>

      <div class="gradient-1"></div>

      <div class="section-contact-me-container">
        <section id="contact-me">
          <h2>Contact me</h2>
          <p>I'm always interested in hearing about new opportunities, 
            learning new languages and design techniques.</p>
          <p>
            <a 
              href="mailto:jason.scaramuzza@gmail.com" 
              class="link-style-button">
              Email me
            </a>
          </p>
        </section>
      </div>
      <div class="gradient-1"></div>

      <footer>
        <h2>Jason Scaramuzza &middot; Software Engineer</h2>
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com/in/jason-scaramuzza-842ba8181/" 
              target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true"/> 
              <span class="sr-only">{NAVBAR[4]}</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/JasonScaramuzza"
              target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} aria-hidden="true"/>
              <span class="sr-only">{NAVBAR[5]}</span>
            </a>
          </li>
          <li>
            <a 
              href="mailto:jason.scaramuzza@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true"/>
              <span class="sr-only">{NAVBAR[3]}</span>
            </a>
          </li>
        </ul>
        <p><small>&copy; 2023 Jason Scaramuzza. All rights reserved.</small></p>
      </footer>
    </div>
  );
};

export default SudokuPage;