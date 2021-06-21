import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './containers/Header/Header';
import Intro from './containers/Intro/Intro';
import InfoList from './containers/InfoList/InfoList';
import Form from './containers/Form/Form';
import Footer from './containers/Footer/Footer';


const App = () => {
  return (
    <>
      <Router>
        <Header/> 
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
         
      <Intro/>
      <InfoList/>
      <Form/>
      <Footer/>

    </>
  );
}

export default App;
