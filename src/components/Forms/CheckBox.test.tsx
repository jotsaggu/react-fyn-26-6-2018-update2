import * as React from 'react';

import * as enzyme from 'enzyme';
const Adapter = require('enzyme-adapter-react-16');
import CheckBox from './CheckBox';

enzyme.configure({ adapter: new Adapter() });

it('Renders CheckBox', () => {
  const btn = enzyme.mount(<CheckBox label="Test" />);
  expect(btn.find('.check_label').text()).toEqual('Test');
});