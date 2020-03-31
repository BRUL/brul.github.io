import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Splash from '../Splash/Splash';
import Project from '../Project/Project';
import Projects from '../Projects/Projects';
import Info from '../Info/Info';
import Contact from '../Contact/Contact';
import Objects from '../Objects/Objects';

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
          <Switch location={location}>
            <Route exact path='/' component={Splash} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/projects/:id' component={Project} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/objects' component={Objects} />
          </Switch>
      )}
    />
  </Router>
)

export default App;
