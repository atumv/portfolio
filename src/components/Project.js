import React from "react";

const Project = (props) => {
  const {
    baseProjectUrl,
    baseImgPath,
    name,
    title,
    extension,
    imgWidth,
    imgHeight,
  } = props;

  return (
    <a
      className="website-link"
      href={`${baseProjectUrl}/${name}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="website portfolio__website">
        <h3 className="website__title">{title}</h3>
        <img
          className="website__thumb"
          src={`${baseImgPath}/projects/${name}.${extension}`}
          width={imgWidth}
          height={imgHeight}
          alt={name}
        />
      </div>
    </a>
  );
};

export default Project;
