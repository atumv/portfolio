import React from "react";

const AuthorPhoto = ({ baseImgPath }) => (
  <img className="author__img" src={`${baseImgPath}/author.jpg`} alt="author" />
);

export default AuthorPhoto;
