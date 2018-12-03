import * as React from 'react';

import * as enzyme from 'enzyme';
const Adapter = require('enzyme-adapter-react-16');
import SelectBox from './SelectBox';

enzyme.configure({ adapter: new Adapter() });

it('Renders SelectBoxw', () => {
  const btn = enzyme.mount(
    <SelectBox 
        options={['Singapore', 'Philippines']} 
        label="Location Country*" 
        placeholder="Select your Country"
        onChange={(e: React.FormEvent<HTMLSelectElement>) => { alert(e.currentTarget.value); }}
    />
  );
  expect(btn.find('label').text()).toEqual('Location Country*');
  expect(btn.find('select').props().value).toEqual('Select your Country');
});