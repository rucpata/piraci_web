import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './containers/Header/Header';
import Intro from './containers/Intro/Intro';
import InfoList from './containers/InfoList/InfoList';
import Form from './containers/Form/Form';
import Footer from './containers/Footer/Footer';

import {intro} from './data';

const App = () => {

  const intros = intro

  return (
    <>
      <Router>
        <Header/> 
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
         
      <Intro intro={intros.find(intro => intro.id === 1)}/>
      <br/><br/><br/>
      {/* <InfoList/> */}
      <Intro intro={intros.find(intro => intro.id === 2)}/>
      <br/><br/><br/>

      <Intro intro={intros.find(intro => intro.id === 3)}/>

      {/* <Form/>
      <Footer/> */}

    </>
  );
}

export default App;
