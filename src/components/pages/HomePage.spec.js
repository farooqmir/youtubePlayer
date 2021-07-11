import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';
import YoutubePlayer from "../YoutubePlayer";

describe('<HomePage />', () => {
  it('renders Child component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.containsMatchingElement(<YoutubePlayer />)).toEqual(true);
  });
});
