import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
    it('sets error message when trying to save empty title', () =>{
        //one way is to add providerconst wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>);
        const props ={
            authors:[],
            actions:{saveCourse:()=>{return Promise.resolve();}},
            course:{id:'',watchHref:'', title:'',authorId:'',length:'',category:''}
        }
        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be atleast 5 characters.')
    });
});