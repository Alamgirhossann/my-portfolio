import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/project'>
          <Projects></Projects>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/contact'>
          <ContactUs></ContactUs>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
