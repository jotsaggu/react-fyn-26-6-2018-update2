/* tslint: disable */
import * as React from 'react';

export interface ButtonProps {
  type?: string;
  label?: string;
  kind?: string;
  className?: string;
  href?: string;
  onClick?: Function;
}

class LinkButton extends React.Component<ButtonProps, object> {
  render() {
    const { href, label } = this.props;
    return(
      <p className="forgot_password">
        <a href={href}>
          {label}
        </a>
      </p>
    );
  }
}

class RegularButton extends React.Component<ButtonProps, object> {
  render() {
    const { type, className, onClick, label } = this.props;
    const noop = () => {}; // tslint:disable-line
    const onClickHandle = onClick || noop;
    return (
      <button
        id="btnRegular"
        type={type} 
        className={className}
        onClick={() => { onClickHandle(); }}
      >
        {label}
      </button>
    );
  }
}

class ButtonRender extends React.Component<ButtonProps, object> {
  render() {
    const { label, onClick, type, className, kind, href } = this.props;
    // REMINDER: no operation function need if onClick is undefined
    const noop: Function = () => {}; // tslint:disable-line
    const onClickHandle: Function = onClick || noop;
    if (kind === 'link') {
      return <LinkButton label={label} href={href} />;
    }
    return(
      <RegularButton 
        label={label}
        type={type}
        className={className} 
        onClick={() => { onClickHandle(); }} 
      />
    );
  }
}
class Button extends React.Component<ButtonProps, object> {
  render() {
    return(
      <div className="signup_form">
        <ButtonRender {...this.props} />
      </div>
    );
  }
}
    // tslint:disable-next-line
export default Button; 