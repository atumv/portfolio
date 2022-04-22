import React from 'react';
import hand from 'assets/images/hand.svg';
import './styles.scss';

export const Header = () => (
  <h1 className="intro__header">
    Приветствую! <img className="intro__hand-img" src={hand} alt="hand" />
    <br />
    Меня зовут Алексей, я увлекаюсь веб-разработкой.
    <br />
    Здесь собраны работы для портфолио.
  </h1>
);
