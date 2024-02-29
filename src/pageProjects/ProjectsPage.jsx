import MyContactMe from "../globalComponents/myContactMe/MyContactMe";
import MyHeader from "../globalComponents/myHeader/MyHeader";
import MyFooter from "../globalComponents/myFooter/MyFooter";
import Project from "./Project";

import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
      <MyHeader />
      <div className="gradient-1"></div>
      <div className="projects-page-content">
        <div className="projects-container">
          <Project
            key={1}
            projectType={"Personal Project"}
            title={"Sudoku"}
            titleLinkPath={"/sudoku"}
            description={
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
            }
            imageSrc={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/800px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png"
            }
            imageAlt={"Game of Sudoku"}
            technologiesUsed={["React", "CSS", "HTML", "SVG"]}
          />
          <Project
            key={2}
            projectType={"FrontendMasters Project"}
            title={"Pet Adoption"}
            titleLinkPath={"/pet-adoption"}
            description={
              <p>
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description. Description of the project. This
                should be fairly concise while also describing the key
                components that you developed or worked on. It can be as long as
                you need it to be but should at least be a few sentences long.
                Be sure to include specific links anywhere in the description.
              </p>
            }
            imageSrc={
              "https://img.freepik.com/premium-photo/cute-puppy-dog-generated-by-ai_986584-14302.jpg"
            }
            imageAlt={"Placeholder"}
            technologiesUsed={["React", "CSS", "HTML"]}
          />
          <Project
            key={3}
            projectType={"Personal Project"}
            title={"Login form"}
            titleLinkPath={"/login-form"}
            description={
              <p>
                A basic login form for the purposes of learning Jest testing.
                The form takes an email address and password, runs input
                validation and then attempts to log the user into &apos;an
                account&apos;. Future plans include using firebase to handle the
                user account and authentication. Firebase would return either
                success or failure to the user along with appropriate feedback.
                This project will impliment Jest unit testing. This will be my
                first time using Jest testing.
              </p>
            }
            imageSrc={"https://cdn-icons-png.flaticon.com/512/3040/3040770.png"}
            imageAlt={"Placeholder"}
            technologiesUsed={["React", "CSS", "HTML", "Jest"]}
          />
          <Project
            key={4}
            projectType={"Personal Project"}
            title={"Calendar"}
            titleLinkPath={"/calendar"}
            imageSrc={
              "https://cdn-icons-png.flaticon.com/512/10691/10691802.png"
            }
            imageAlt={"Calendar"}
            technologiesUsed={["React", "CSS", "HTML"]}
          />
          <Project />
        </div>
      </div>
      <div className="gradient-1"></div>
      <MyContactMe />
      <div className="gradient-1"></div>
      <MyFooter />
    </div>
  );
};

export default ProjectsPage;
