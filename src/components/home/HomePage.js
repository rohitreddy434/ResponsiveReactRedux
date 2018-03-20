import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div
        className="jumbotron">
        <h1> Pluralsight Adminstration </h1>
        <p>React, Redux and React router in es6 for Ultra-responsive web apps</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
