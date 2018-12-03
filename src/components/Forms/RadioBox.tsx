import * as React from 'react';

export interface RadioBoxProps {
  label: string;
  name: string;
  checked?: boolean;
  onChange: Function;
}
class RadioBox extends React.Component<RadioBoxProps, object> {
  render() {
    const {label, name, checked, onChange } = this.props;
    return (
      <label className="custom_inputs">{label}
          <input 
            type="radio" 
            checked={checked} 
            name={name}
            value={label}
            onChange={(e) => { onChange(e); }}
          />
          <span className="checkmark"/>
      </label>
    );
  }
}

export default RadioBox;