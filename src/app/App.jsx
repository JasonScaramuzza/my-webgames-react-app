import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
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

      <section id="intro">
        <p className="name">Hi my name is <span>Jason Scaramuzza.</span></p>
        <h2>I'm a software engineer.</h2>
        <p> I specialize in frontend development with experience in HTML, 
            CSS, JavaScript and React </p>
        <p>Currently I am engaged in work expereince at Riskwell, 
        a Risk Management SaaS based organisation, whilst looking for a job.</p>
      </section>
      <div class="gradient-1"></div>

      <div class="section-projects-container">
        <section id="projects">
          <h2>Projects I'm proud of</h2>
          <article>
            <div class="project-text">
              <h4>Latest Project</h4>
              <h3>Example Project Name</h3>
              <p>Description of the project. This should be fairly concise while 
                also describing the key components that you developed or worked on. 
                It can be as long as you need it to be but should at least be a few 
                sentences long. Be sure to include specific links anywhere in the 
                description. A link looks like <a 
                href="https://frontendmasters.github.io/grid-flexbox-v2/">this</a>, 
                and multiple links look <a href="#">like this</a> and <a href="#">like this</a>.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
            </div>
            <div class="project-img">
              <img 
                src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" 
                alt="placeholder">
              </img>
            </div>
          </article>
          <article>
            <div class="project-text">
              <h4>Placeholder Project Type</h4>
              <h3>Example Project Name</h3>
              <p>Description of the project. This should be fairly concise while 
                also describing the key components that you developed or worked on. 
                It can be as long as you need it to be but should at least be a few 
                sentences long. Be sure to include specific links anywhere in the 
                description. A link looks like <a 
                href="https://frontendmasters.github.io/grid-flexbox-v2/">this</a>, 
                and multiple links look <a href="#">like this</a> and <a href="#">like this</a>.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
            </div>
            <div class="project-img">
              <img 
                src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" 
                alt="placeholder">
              </img>
            </div>
          </article>
          <article>
            <div class="project-text">
              <h4>Placeholder Project Type</h4>
              <h3>Example Project Name</h3>
              <p>Description of the project. This should be fairly concise while 
                also describing the key components that you developed or worked on. 
                It can be as long as you need it to be but should at least be a few 
                sentences long. Be sure to include specific links anywhere in the 
                description. A link looks like <a 
                href="https://frontendmasters.github.io/grid-flexbox-v2/">this</a>, 
                and multiple links look <a href="#">like this</a> and <a href="#">like this</a>.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
            </div>
            <div class="project-img">
              <img 
                src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" 
                alt="placeholder">
              </img>
            </div>
          </article>
        </section>
      </div>

      <div class="gradient-1"></div>
      <div class="section-contact-me-container">
        <section id="contact-me">
          <h2>Contact me</h2>
          <p>I'm always interested in hearing about new job opportunities, 
            learning new languages and new design techniques.</p>
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
        <p><small>&copy; 2024 Jason Scaramuzza. All rights reserved.</small></p>
      </footer>
    </div>
  );
}

export default App;
