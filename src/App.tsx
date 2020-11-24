import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import Navigation from './components/Naviagtion/Naviagtion';
import PopUp from './components/PopUp/PopUp';

import './App.css';
import 'flexboxgrid';

const App = () => {
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    setPopUp(true);
  }, []);

  return (
    <>
      {popUp && <PopUp onClick={() => setPopUp(false)} />}
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/posts/:id">
            <Posts />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
