import './App.css';
import React from 'react';

import Header from './containers/Header/Header';
import Intro from './containers/Intro/Intro';
import InfoList from './containers/InfoList/InfoList';
import Form from './containers/Form/Form';
import Footer from './containers/Footer/Footer';


const App = () => {
  return (
    <>
      <Header/>    
      <Intro/>
      <InfoList/>
      <Form/>
      <Footer/>

    </>
  );
}

export default App;
