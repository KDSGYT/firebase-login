import React from 'react';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import Profile from './Profile';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Parent Component', () => {
    const userInfo = {
        photoURL: "https://lh3.googleusercontent.com/a-/AOh14Ghr5P4jeOjDHwfW9bKDibWnn9O9s0tUDPlIzX_BIw=s96-c",
        email: "kdsgyt@gmail.com"
    }
    const wrapper = shallow(<Profile userInfo={userInfo} />);
    it('renders ProfilePhoto Child component', () => {
        expect(wrapper.containsMatchingElement(<ProfilePhoto photoURL={userInfo.photoURL} />)).toEqual(true);
    });

    it('renders Email Child Component', () => {
        // expect(wrapper.containsMatchingElement(<div>Email:{userInfo.email}</div>)).toEqual(true);
    })
});