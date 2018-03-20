import 'babel-polyfill';
import React from 'react';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {render} from 'react-dom';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
const history = createBrowserHistory();
render(
  <Router history={history} routes={routes}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('app')
);
