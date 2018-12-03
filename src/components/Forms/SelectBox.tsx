import * as React from 'react';

export interface SelectBoxOptionsProps {
  options: Array<string>;
}

export interface SelectBoxProps extends SelectBoxOptionsProps {
  label: string;
  placeholder: string;
  onChange: Function;
}

export interface SelectBoxContainerProps {
  children?: React.ReactNode;
  label: string;
}

export interface SelectBoxState {
  selectedValue?: string;
}

export class SelectBoxOptions extends React.Component<SelectBoxOptionsProps, object> {
  render() {
    return this.props.options.map((label, index) => {
      return <option key={index}>{label}</option>;
    });
  }
}

export class SelectBoxContainer extends React.Component<SelectBoxContainerProps, object> {
  render() {
    const {label, children} = this.props;
    return(
      <div className="form-group">
        <label>{label}</label>
        <div className="input_outer custom_select">
          {children}
        </div>
      </div>
    );
  }
}
class SelectBox extends React.Component<SelectBoxProps, SelectBoxState> {
  constructor(props: SelectBoxProps) {
    super(props);
    this.state = {
      selectedValue: props.placeholder,
    };
  }
  render() {
    const { label, options, placeholder, onChange } = this.props;
    const { selectedValue } = this.state;
    return(
      <SelectBoxContainer label={label}>
        <select 
          className="form-control" 
          value={selectedValue} 
          onChange={(e) => {
            this.setState({ selectedValue: e.currentTarget.value}); 
            onChange(e); 
          }}
        >
          <option disabled={true}>{placeholder}</option>
          <SelectBoxOptions options={options} />
        </select>
        <span className="input_icon"><i className="fa fa-globe" aria-hidden="true"/></span>
      </SelectBoxContainer>
    );
  }
}

export default SelectBox;