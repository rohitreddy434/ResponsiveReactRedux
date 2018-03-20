import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/home/HomePage';
import About from './components/about/AboutPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
  </Route>
        
);

