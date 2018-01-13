import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Splash from '../Splash/Splash';
import Projects from '../Projects/Projects';
import Project from '../Project/Project';
import Info from '../Info/Info';
import Contact from '../Contact/Contact';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Splash} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/projects/:id' component={Project} />
      <Route path='/info' component={Info} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </Router>
)

export default App;
