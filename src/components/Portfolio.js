import React from "react";
import Project from "./Project";

const Portfolio = ({ projects, baseProjectUrl, baseImgPath }) => (
  <section className="portfolio">
    <ul className="projects-list">
      {projects.map((project) => (
        <li key={project.id}>
          <Project
            baseProjectUrl={baseProjectUrl}
            baseImgPath={baseImgPath}
            name={project.name}
            title={project.title}
            extension={project.extension}
            imgWidth={project.imgWidth}
            imgHeight={project.imgHeight}
          />
        </li>
      ))}
    </ul>
  </section>
);

export default Portfolio;
