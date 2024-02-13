import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import MyHeader from '../globalComponents/myHeader/MyHeader';

import './App.css';

//MAIN PAGE

function App() {
  return (
    <div className="main-page">
      
      <MyHeader />

      <div className="gradient-1"></div>

      <section id="intro">
        <p className="name">Hi my name is <span>Jason Scaramuzza.</span></p>
        <h2>I'm a software engineer.</h2>
        <p> I specialize in frontend development with experience in HTML, 
            CSS, JavaScript and React </p>
        <p>Currently I am engaged in work expereince at Riskwell, 
        a Risk Management SaaS based organisation, whilst looking for a job.</p>
      </section>

      <div className="gradient-1"></div>

      <div className="section-projects-container">
        <section id="projects">
          <h2>My Projects:</h2>
          <article>
            <div className="project-text">
              <h4>Personal Project</h4>
              <div className="link-style-1-container">
                <Link to="/sudoku"> 
                    <h3>Sudoku</h3>
                </Link>
              </div>
              <p>This project is uses HTML, CSS and JavaScript to create a game of Sudoku. 
                The boards are currently pulled from the <a 
                href="https://sudoku-api.vercel.app/"
                target="_blank" rel="noreferrer">Dosuku</a> API. This API provides 
                sodoku boards and solutions at 3 difficulties, Easy, Medium and Hard. 
                The API however, does not allow for custom queries, therefore which difficulty 
                you get is comletely up to chance!
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
            </div>
            <div className="project-img">
              <img 
                src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" 
                alt="placeholder">
              </img>
            </div>
          </article>
          <article>
            <div className="project-text">
              <h4>Placeholder Project Type</h4>
              <h3>Example Project Name</h3>
              <p>Description of the project. This should be fairly concise while 
                also describing the key components that you developed or worked on. 
                It can be as long as you need it to be but should at least be a few 
                sentences long. Be sure to include specific links anywhere in the 
                description.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
            </div>
            <div className="project-img">
              <img 
                src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" 
                alt="placeholder">
              </img>
            </div>
          </article>
          <article>
            <div className="project-text">
              <h4>Placeholder Project Type</h4>
              <h3>Example Project Name</h3>
              <p>Description of the project. This should be fairly concise while 
                also describing the key components that you developed or worked on. 
                It can be as long as you need it to be but should at least be a few 
                sentences long. Be sure to include specific links anywhere in the 
                description.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
            </div>
            <div className="project-img">
              <img 
                src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" 
                alt="placeholder">
              </img>
            </div>
          </article>
        </section>
      </div>

      <div className="gradient-1"></div>

      <div className="section-contact-me-container">
        <section id="contact-me">
          <h2>Contact me</h2>
          <p>I'm always interested in hearing about new opportunities, 
            learning new languages and design techniques.</p>
          <p>
            <a 
              href="mailto:jason.scaramuzza@gmail.com" 
              className="link-style-button">
              Email me
            </a>
          </p>
        </section>
      </div>
      
      <div className="gradient-1"></div>

      <footer>
        <h2>Jason Scaramuzza &middot; Software Engineer</h2>
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com/in/jason-scaramuzza-842ba8181/" 
              target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true"/> 
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/JasonScaramuzza"
              target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} aria-hidden="true"/>
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a 
              href="mailto:jason.scaramuzza@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true"/>
              <span className="sr-only">Contact</span>
            </a>
          </li>
        </ul>
        <p><small>&copy; 2023 Jason Scaramuzza. All rights reserved.</small></p>
      </footer>
    </div>
  );
}

export default App;
