import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import asyncComponent from '../../components/AsyncComponent/AsyncComponent';

const AsyncSplash = asyncComponent(() => import('../Splash/Splash'));
const AsyncProjects = asyncComponent(() => import('../Projects/Projects'));
const AsyncProject = asyncComponent(() => import('../Project/Project'));
const AsyncInfo = asyncComponent(() => import('../Info/Info'));
const AsyncContact = asyncComponent(() => import('../Contact/Contact'));

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={AsyncSplash} />
      <Route exact path='/projects' component={AsyncProjects} />
      <Route exact path='/projects/:id' component={AsyncProject} />
      <Route exact path='/info' component={AsyncInfo} />
      <Route exact path='/contact' component={AsyncContact} />
    </Switch>
  </Router>
)

export default App;
