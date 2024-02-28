import MyContactMe from "../globalComponents/myContactMe/MyContactMe";
import MyHeader from "../globalComponents/myHeader/MyHeader";
import MyFooter from "../globalComponents/myFooter/MyFooter";
import Project from "./Project";

const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
      <MyHeader />
      <div className="gradient-1"></div>
      <div className="projects-page-content">
        <input type="text"></input>
        <Project />
        <div>1 Project</div>
        <div>1 Project</div>
        <div>1 Project</div>
        <div>1 Project</div>
        <div>Loading...</div>
        <div>Error</div>
      </div>
      <div className="gradient-1"></div>
      <MyContactMe />
      <div className="gradient-1"></div>
      <MyFooter />
    </div>
  );
};

export default ProjectsPage;
