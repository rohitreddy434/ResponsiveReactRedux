import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';
describe('Course Reducer', () => {
    it('should add couse when passed create_course_success', () =>{
        const initialState = [
            {title:'A'},
            {title:'B'}
        ];
        const newCourse = {title:'C'};
        const action = actions.createCourseSuccess(newCourse);
        const newState = courseReducer(initialState, action);
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');        
    });

    it('should update course when passed update_course_success', () => {
        const initialState = [
            { id: 'A', title: 'A' },
            { id: 'B', title: 'B' },
            { id: 'C', title: 'C' }
        ];
        const course = { id: 'B', title: 'New Title' };
        const action = actions.updateCourseSuccess(course);
        const newState = courseReducer(initialState, action);
        const updateCourse = newState.find(a => a.id == course.id);
        const untouchedCourse = newState.find(a => a.id == 'A');
        expect(updateCourse.title).toEqual('New Title');
        expect(untouchedCourse.title).toEqual('A');
        expect(newState.length).toEqual(3);
    });
});