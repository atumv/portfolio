import React from 'react';
import './styles.scss';

export const Project = ({
  baseProjectUrl,
  baseImgPath,
  name,
  title,
  extension,
  imgWidth,
  imgHeight,
}) => (
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
        src={require(`../../../${baseImgPath}/projects/${name}.${extension}`)}
        width={imgWidth}
        height={imgHeight}
        alt={name}
      />
    </div>
  </a>
);
