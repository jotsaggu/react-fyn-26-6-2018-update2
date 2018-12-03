import * as React from 'react';

import * as enzyme from 'enzyme';
const Adapter = require('enzyme-adapter-react-16');
import RadioBox from './RadioBox';

enzyme.configure({ adapter: new Adapter() });

it('Renders RadioBox', () => {
  const btn = enzyme.mount(
    <RadioBox 
      label="Backer" 
      name="account_type" 
      onChange={(e: React.FormEvent<HTMLInputElement>) => { alert(e.currentTarget.value); }}
    />
  );
  expect(btn.find('label').text()).toEqual('Backer');
  expect(btn.find('input').props().value).toEqual('Backer');
});