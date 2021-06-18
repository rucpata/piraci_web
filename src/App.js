import './App.css';
import React from 'react';

import Intro from './containers/Intro/Intro';
import InfoList from './containers/InfoList/InfoList';

const App = () => {
  return (
    <>
      <header>
        <nav>
          <p>Nawigacja</p>
          <img src="" alt="logo" />
          <button></button>
        </nav>
        <img src="../img/background/bg_czaszka.jpg" alt="" />
      </header>     
      <Intro/>
      <InfoList/>
    

    </>
  );
}

export default App;
