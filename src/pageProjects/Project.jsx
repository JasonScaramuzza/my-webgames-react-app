import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Project = (
  projectType,
  title,
  titleLink,
  description,
  imageSrc,
  imageAlt,
  technologiesUsed,
) => {
  this.projectType = projectType ?? "No Project Type";
  this.title = title ?? "No title";
  this.titleLink = titleLink ?? "/home";
  this.description = description ?? "No description";
  this.imageSrc =
    imageSrc ??
    "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw";
  this.imageAlt = imageAlt ?? "Placeholder img";
  this.technologiesUsed = technologiesUsed ?? [""];

  return (
    <article>
      <div className="project-text">
        <h4>{projectType}</h4>
        <div className="link-style-1-container">
          <Link to={titleLink}>
            <h3>{title}</h3>
          </Link>
        </div>
        <p>{description}</p>
        <h4>Technologies used include:</h4>
        <ul>
          {technologiesUsed.map((index) => {
            <li>{technologiesUsed[index]}</li>;
          })}
        </ul>
      </div>
      <div className="project-img">
        <img src={imageSrc} alt={imageAlt}></img>
      </div>
    </article>
  );
};

export default Project;
