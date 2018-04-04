import expect from 'expect';
import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import CourseForm from './CourseForm';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
function setup(saving) {
    let props = {
        course: {}, saving: saving, errors: {},
        onSave: () => { },
        onChange: () => { }
    };
    return shallow(<CourseForm {...props} />);
}

describe('Enzyme tests for <CourseForm/>' ,function (){
    it('renders form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });
    it('save button is labeled "Save" when not saving', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });
    it('save button is labeled "Saving.." when  saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});