import * as React from 'react';

import * as enzyme from 'enzyme';
const Adapter = require('enzyme-adapter-react-16');
import Button from './Button';

enzyme.configure({ adapter: new Adapter() });

it('Renders Button', () => {
  const btn = enzyme.mount(<Button className="orange_btn long_btn" label="Test" />);
  expect(btn.find('#btnRegular').text()).toEqual('Test');
});