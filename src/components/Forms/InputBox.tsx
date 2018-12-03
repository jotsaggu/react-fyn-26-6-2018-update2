import * as React from 'react';
// TODO: Add Redux-Form Wrapper Later [vince]
export interface InputBoxProps {
  type?: string;
  label: string;
  placeholder: string;
  icon: string;
}

export interface InputBoxContainerProps {
  children?: JSX.Element[];
}

export class InputBoxContainer extends React.Component<InputBoxContainerProps, object> {
  render() {
    const { children } = this.props;
    return(
      <div className="signup_form">
        <div className="form-group">
          {children}
        </div>
      </div>
    );
  }
}
class InputBox extends React.Component<InputBoxProps, object> {
  render() {
    const { label, placeholder, icon, type } = this.props;
    return (
      <InputBoxContainer>
        <label>{label}</label>
        <div className="input_outer">
          <input
            id="inputBox" 
            type={type || 'text'} 
            className="form-control" 
            placeholder={placeholder} 
          />
          <span className="input_icon"><i className={`fa ${icon}`} aria-hidden="true"/></span>
        </div>
      </InputBoxContainer>
    );
  }
}

export default InputBox;