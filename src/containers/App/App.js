import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Splash from '../Splash/Splash';
import Project from '../Project/Project';
import Projects from '../Projects/Projects';
import Info from '../Info/Info';
import Contact from '../Contact/Contact';

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
                <Route exact path='/' component={Splash} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/projects/:id' component={Project} />
                <Route exact path='/info' component={Info} />
                <Route exact path='/contact' component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
    />
  </Router>
)

export default App;
