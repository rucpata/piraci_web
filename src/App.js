import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './containers/Header/Header';
import Intro from './containers/Intro/Intro';
import Story from './containers/Story/Story';
import InfoList from './containers/InfoList/InfoList';
import Form from './containers/Form/Form';
import Footer from './containers/Footer/Footer';

import {intro, sliderone, slidertwo} from './data';


const App = () => {

  const intros = intro
  const info1 = sliderone
  const info2 = slidertwo

  return (
    <>
      <Router>
        <Header/> 
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
         
      <Intro intro={intros.find(intro => intro.id === 1)}/>
      <Story/>
      <Intro intro={intros.find(intro => intro.id === 2)}/>
      <InfoList info={info1} title={true}/>
    
      <Intro intro={intros.find(intro => intro.id === 3)}/>
      <InfoList info={info2} title={false}/>
      <Form/>
      <Footer/> 

    </>
  );
}

export default App;
