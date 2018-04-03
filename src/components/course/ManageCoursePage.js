import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends Component {
    constructor(props,context) {
        super(props);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };
        this.updateCourseState =this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.course.id != nextProps.id){
            this.setState({course:Object.assign({}, nextProps.course)});
        }
    }
    updateCourseState(evt){
        const field = evt.target.name;
        let course = Object.assign({},this.state.course);
        course[field]= evt.target.value;
        return this.setState({course});
    }
    saveCourse(evt){
        evt.preventDefault();
        this.setState({saving:true});
        this.props.actions.saveCourse(this.state.course)
        .then(()=> this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({saving:false});
        });
        
        //using context instead of history:
        //this.context.router.push('/courses');
    }
    redirect(){
        this.setState({saving:false});
        toastr.success('Course saved');
        this.props.history.push('/courses');
    }
    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm
                    onChange={this.updateCourseState}
                    course={this.state.course}
                    onSave={this.saveCourse}
                    saving={this.state.saving}
                    errors={this.state.errors}
                    allAuthors={this.props.authors}
                />
            </div>
        );
    }
}
ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
// ManageCoursePage.contextTypes={
//     router:PropTypes.object
// }
function mapStateToProps(state, ownProps) {
    let course ={};

    if(state.courses.length>0 && ownProps.match.params.id){
        course = state.courses.find((course)=>{
            return course.id == ownProps.match.params.id;
        });
    } else {
    course = { id: "", watchHref: '', title: '', authorId: '', length: '', category: '' };
    }
    const authorsFormattedForDropdown = state.authors.map(author=>{
        return {
            value:author.id,
            text:author.firstName+" "+author.lastName
        };
    });
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);