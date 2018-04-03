import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
class CoursesPage extends Component {
    constructor(props) {
        super(props);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    redirectToAddCoursePage(){
        this.props.history.push('/course');
    }
    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                value ="Add Course"
                className="btn btn-primary"
                onClick = {this.redirectToAddCoursePage}/>
                <CourseList courses = {courses}/>
            </div>
        );
    }
}
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}
function mapDispatchToProps(dispatch) {
    //second way to assign actions in props.
    // return{
    //     createCourse: course => dispatch(courseActions.createCourse(course))
    // };
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);