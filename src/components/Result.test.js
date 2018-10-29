import React from 'react';
import { shallow } from 'enzyme';
import { PureResult as Result } from './Result';

it('Should render the Result component with message about current turn', () => {
  const wrapper = shallow(<Result turn={'o'} draw={false} />);
  expect(wrapper.find('p').node.props.children).toEqual('It\'s O\'s turn.');
});

it('Should render the Result component with message about winning symbol', () => {
  const wrapper = shallow(<Result won={'x'} draw={false} turn={'x'} />);
  expect(wrapper.find('p').node.props.children).toEqual('Yay! X won!');
});
