import './App.css';
import Home from './Components/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import Work from './Components/Work/Work';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/home">
             <Home></Home>
          </Route>

          <Route path="/about">
              <About></About>
          </Route>

          <Route path="/resume">
            <Resume></Resume>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/" >
             <Home></Home>
          </Route>

          <Route path="/work">
            <Work></Work>
          </Route>

          <Route>
            <Blog></Blog>
          </Route>

        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
