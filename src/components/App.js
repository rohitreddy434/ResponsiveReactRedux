import React from 'react';
import Header from './common/Header';
import MenuComponent from './common/MenuComponent';
import { Route, Switch, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ErrorPage from './ErrorPage';
import ManageCoursePage from './course/ManageCoursePage';
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading = {this.props.loading}/>
        <MenuComponent/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/courses" component={CoursesPage} />
          <Route exact path="/course" component={ManageCoursePage} />
          <Route exact path="/course/:id" component={ManageCoursePage} />
       
        </Switch>
      </div>
    );
  }
}
App.propTypes = {
  loading: PropTypes.bool
};
function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress>0
  };
}
export default withRouter(connect(mapStateToProps)(App));
