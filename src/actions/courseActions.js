import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
export function createCourse(course) {
    return { type: types.CREATE_COURSE, course }; //course:course
}
export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses }; //course:course
}
export function updateCourseSuccess(savedCourse) {
    return { type: types.UPDATE_COURSE_SUCCESS, savedCourse };
}
export function createCourseSuccess(savedCourse) {
    return { type: types.CREATE_COURSE_SUCCESS, savedCourse };
}
export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    };
}
export function saveCourse(course) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CourseApi.saveCourse(course).then((savedCourse) => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw (error);
        });
    };
}