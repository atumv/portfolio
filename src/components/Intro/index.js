import React from 'react';
import { Author } from './Author';
import { AuthorPhoto } from './AuthorPhoto';
import { Contacts } from './Contacts';
import { Github } from './Github';
import { Email } from './Email';
import { Header } from './Header';
import './styles.scss';

export const Intro = ({ baseImgPath, github, email }) => (
  <section className="intro">
    <div className="container">
      <Author>
        <AuthorPhoto baseImgPath={baseImgPath} />
        <Contacts>
          <Github github={github} />
          <Email email={email} />
        </Contacts>
      </Author>
      <Header />
    </div>
  </section>
);
