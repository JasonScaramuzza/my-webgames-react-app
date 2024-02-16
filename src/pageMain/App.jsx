import { Link } from "react-router-dom";

import MyHeader from "../globalComponents/myHeader/MyHeader";
import MyContactMe from "../globalComponents/myContactMe/MyContactMe";
import MyFooter from "../globalComponents/myFooter/MyFooter";

import "./App.css";

//MAIN PAGE

function App() {
  return (
    <div id="main-page">
      <MyHeader />

      <div className="gradient-1"></div>

      <div id="intro-container">
        <section id="intro">
          <p className="name">
            Hi my name is <span>Jason Scaramuzza.</span>
          </p>
          <h2>I&apos;m a software engineer.</h2>
          <p>
            {" "}
            I specialize in frontend development with experience in HTML, CSS,
            JavaScript and React{" "}
          </p>
          <p>
            Currently I am engaged in work expereince at Riskwell, a Risk
            Management SaaS based organisation, whilst looking for a job.
          </p>
        </section>
      </div>

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
              <p>
                This project is uses HTML, CSS and JavaScript to create a game
                of Sudoku. The boards are currently pulled from the{" "}
                <a
                  href="https://sudoku-api.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dosuku
                </a>{" "}
                API. This API provides sodoku boards and solutions at 3
                difficulties, Easy, Medium and Hard. The API however, does not
                allow for custom queries, therefore which difficulty you get is
                comletely up to chance!
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
            </div>
            <div className="project-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/800px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png"
                alt="Game of sudoku"
              ></img>
            </div>
          </article>
          <article>
            <div className="project-text">
              <h4>FrontendMasters Project</h4>
              <div className="link-style-1-container">
                <Link to="/pet-adoption">
                  <h3>Pet Adoption</h3>
                </Link>
              </div>
              <p>
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="project-img">
              <img
                src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
                alt="placeholder"
              ></img>
            </div>
          </article>
          <article>
            <div className="project-text">
              <h4>Placeholder Project Type</h4>
              <h3>Example Project Name</h3>
              <p>
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description.
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
                alt="placeholder"
              ></img>
            </div>
          </article>
        </section>
      </div>

      <div className="gradient-1"></div>

      <MyContactMe />

      <div className="gradient-1"></div>

      <MyFooter />
    </div>
  );
}

export default App;
