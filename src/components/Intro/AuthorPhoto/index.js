import React from 'react';
import './styles.scss';
import author from 'assets/images/author.jpg';

export const AuthorPhoto = () => (
  <img className="author__img" src={author} alt="author" />
);
