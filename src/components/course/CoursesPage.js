import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
class CoursesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: { title: "" }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange(evt) {
        const course = this.state.course;
        course.title = evt.target.value;
        this.setState({ course: course });
    }
    onClickSave() {
        //not a good practice to call dispatch in component, better to call it in mapDispatchToProps.
        // this.props.dispatch(courseActions.createCourse(this.state.course));
        this.props.actions.createCourse(this.state.course);
    }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Courses</h2>
                <input type="text" onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input type="submit" value="save" onClick={this.onClickSave} />
            </div>
        );
    }
}
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
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