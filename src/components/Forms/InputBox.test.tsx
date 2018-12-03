import * as React from 'react';
import * as enzyme from 'enzyme';
const Adapter = require('enzyme-adapter-react-16');
import InputBox from './InputBox';

enzyme.configure({ adapter: new Adapter() });

it('Renders InputBox with Placeholder', () => {
  const inputBox = enzyme.mount(<InputBox label="Test" placeholder="Test" icon="fa-globe"  />);
  expect(inputBox.find('#inputBox').props().placeholder).toEqual('Test');
});