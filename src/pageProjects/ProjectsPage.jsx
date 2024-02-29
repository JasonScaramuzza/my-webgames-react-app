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
            description={"To Do"}
            imageSrc={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/800px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png"
            }
            imageAlt={"Game of Sudoku"}
            technologiesUsed={["React", "CSS", "HTML", "SVG"]}
          />
          <Project />
          <Project />
          <Project />
          <Project />
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
