import React from "react";
import Author from "./Author";
import AuthorPhoto from "./AuthorPhoto";
import Contacts from "./Contacts";
import Github from "./Github";
import Email from "./Email";
import Header from "./Header";

const Intro = ({ email, github, baseImgPath }) => (
  <section className="intro">
    <Author>
      <AuthorPhoto baseImgPath={baseImgPath} />
      <Contacts>
        <Github github={github} />
        <Email email={email} />
      </Contacts>
    </Author>
    <Header />
  </section>
);

export default Intro;
