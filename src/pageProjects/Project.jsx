import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Project.css";

const Project = (props) => {
  const [projectType, setProjectType] = useState("");
  const [title, setTitle] = useState("");
  const [titleLinkPath, setTitlleLinkPath] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [technologiesUsed, setTechnologiesUsed] = useState([""]);

  useEffect(() => {
    setProjectType(props.projectType ?? "No Project Type");
    setTitle(props.title ?? "No title");
    setTitlleLinkPath(props.titleLinkPath ?? "/home");
    setDescription(props.description ?? <p>No description</p>);
    setImageSrc(
      props.imageSrc ??
        "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
    );
    setImageAlt(props.imageAlt ?? "Placeholder img");
    setTechnologiesUsed(
      props.technologiesUsed ?? [
        "No technology",
        "No technology",
        "No technology",
      ],
    );
  }, []);

  return (
    <article id="project-container">
      <div className="project-heading-wrapper">
        <h4 className="project-type">{projectType}</h4>
        <div className="link-style-1-container">
          <Link to={titleLinkPath}>
            <h3>{title}</h3>
          </Link>
        </div>
      </div>
      {description}
      <div className="project-img-container">
        <img src={imageSrc} alt={imageAlt}></img>
      </div>
      <h4 className="technologies-used">Technologies used include:</h4>
      <ul>
        {technologiesUsed.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </article>
  );
};

export default Project;
