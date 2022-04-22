import React, { useState } from 'react';
import { Intro } from 'components/Intro';
import { Portfolio } from 'components/Portfolio';
import { projectsList } from './projectsList';

const App = () => {
  const [projects] = useState(projectsList);
  const [baseProjectUrl] = useState('https://atumv.github.io');
  const [baseImgPath] = useState('assets/images');
  const [email] = useState('atumv.gm@gmail.com');
  const [github] = useState('https://github.com/atumv');

  return (
    <>
      <Intro baseImgPath={baseImgPath} email={email} github={github} />
      <Portfolio
        projects={projects}
        baseProjectUrl={baseProjectUrl}
        baseImgPath={baseImgPath}
      />
    </>
  );
};

export default App;
