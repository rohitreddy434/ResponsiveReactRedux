import 'babel-polyfill';
import React from 'react';
import {Router, browserHistory} from 'react-router';
import {render} from 'react-dom';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);
