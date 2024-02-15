import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

import "./MyHeader.css";

const NAVBAR = [
  "Jason Scaramuzza",
  "Projects",
  "About",
  "Contact",
  "LinkedIn",
  "Github",
  "Indeed Resume",
];

const MyHeader = () => {
  return (
    <section id="nav-bar">
      <nav>
        <ul>
          <li>
            <h1>
              <a href="home">
                <FontAwesomeIcon icon={faCubes} aria-hidden="true" />
                <span>{NAVBAR[0]}</span>
              </a>
            </h1>
          </li>
          <li>
            <a href="#projects">{NAVBAR[1]}</a>
          </li>
          <li>
            <a href="about">{NAVBAR[2]}</a>
          </li>
          <li>
            <a href="#contact-me">{NAVBAR[3]}</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jason-scaramuzza-842ba8181/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              <span className="sr-only">{NAVBAR[4]}</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JasonScaramuzza"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              <span className="sr-only">{NAVBAR[5]}</span>
            </a>
          </li>
          <li>
            <a
              href="https://profile.indeed.com/p/jasons-vd2jcl7"
              target="_blank"
              rel="noreferrer"
              className="link-style-button"
            >
              {NAVBAR[6]}
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MyHeader;
