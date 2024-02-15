import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './MyFooter.css'

const MyFooter = () =>  {
    return(
        <footer id="my-footer">
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
    );
}

export default MyFooter;