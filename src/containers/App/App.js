import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import asyncComponent from '../../components/AsyncComponent/AsyncComponent';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AsyncSplash = asyncComponent(() => import('../Splash/Splash'));
const AsyncProjects = asyncComponent(() => import('../Projects/Projects'));
const AsyncProject = asyncComponent(() => import('../Project/Project'));
const AsyncInfo = asyncComponent(() => import('../Info/Info'));
const AsyncContact = asyncComponent(() => import('../Contact/Contact'));

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div style={styles.fill}>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={1500}>
              <Switch location={location}>
                <Route exact path='/' component={AsyncSplash} />
                <Route exact path='/projects' component={AsyncProjects} />
                <Route exact path='/projects/:id' component={AsyncProject} />
                <Route exact path='/info' component={AsyncInfo} />
                <Route exact path='/contact' component={AsyncContact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
    />
  </Router>
)

export default App;
