import * as React from 'react';

export interface CheckBoxProps {
  label: string;
  checked?: boolean;
}
class CheckBox extends React.Component<CheckBoxProps, object> {
  render() {
    const { checked, label } = this.props;
    return (
      <div className="custom_checkbox">
        <label className="custom_inputs check_label">{label}
            <input type="checkbox" checked={checked}/>
            <span className="checkmark"/>
        </label>
      </div>
    );
  }
}

export default CheckBox;