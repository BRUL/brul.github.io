import React from 'react';
import { render } from 'react-snapshot';
import './index.scss';
import App from './containers/App/App.js';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
