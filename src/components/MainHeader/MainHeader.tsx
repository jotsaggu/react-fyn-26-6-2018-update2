import * as React from 'react';
import { NavDropdown, MenuItem, Button } from 'react-bootstrap';

export interface ImageProps {
  src: string;
  href: string;
}
export class MobileLogo extends React.Component<ImageProps, object> {
  render() {
    const { src, href } = this.props;
    return(
      <aside className="col-xs-4 text-center mobile_logo">
        <a href={href}><img src={src} alt="" /></a>
      </aside>
    );
  }
}

export class Logo extends React.Component<ImageProps, object> {
  render() {
    const { href, src } = this.props;
    return(
      <aside className="col-md-3 col-sm-3 logo">
        <a href={href}><img src={src} alt="" /></a>
      </aside>
    );
  }
}

export class ImageLinks extends React.Component<ImageProps, object> {
  render() {
    const { src, href } = this.props;
    return(
      <a href={href} data-toggle="tooltip" data-placement="bottom" title="Facebook">
        <img src={src} alt="" />
      </a>
    );
  }
}
export class RightLinkNavHeader extends React.Component {
  render() {
    return (
      <div className="navbar-header">
        <Button 
          type="button" 
          className="navbar-toggle collapsed" 
          data-toggle="collapse" 
          data-target="#navbar" 
          aria-expanded="false" 
          aria-controls="navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </Button>          
      </div>
    );
  }
}

export class RightLinkMenuDropdown extends React.Component {
  render() {
    return (
      <NavDropdown eventKey={3} title="About Us" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} href="/about_community">About Us Community</MenuItem>
        <MenuItem eventKey={3.2} href="/about_fyn">About Us FYN</MenuItem>
        <MenuItem eventKey={3.3} href="/about_value">About Us Value</MenuItem>
      </NavDropdown>
    );
  }
}

export interface RightLinkMenuListProps {
  label: string;
  href: string;
  className?: string;
}
export class RightLinkMenuList extends React.Component<RightLinkMenuListProps, object> {
  render() {
    const {label, href, className } = this.props;
    return (
      <li role="presentation"><a href={href} className={className || ''}>{label}</a></li>
    );
  }
}

export class RightLinkMenu extends React.Component {
  render() {
    return(
      <div aria-expanded="false" id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <RightLinkMenuList href="/news" label="About Us" className="" />
          <RightLinkMenuList href="/#" label="Talent Marketplace" className="" />
          <RightLinkMenuList href="/#" label="EN" className="" />
          <RightLinkMenuList href="/#" label="Publish Your ICO" className="orange_btn" />
        </ul>
      </div>
    );
  }
}
export class RightLinks extends React.Component {
  render() {
    return(
      <aside className="col-md-9 col-xs-9 pull-right nav_right_top">
        <nav className="custom_navigation">
          <RightLinkNavHeader />
          <RightLinkMenu />
        </nav>
      </aside>
    );
  }
}

export interface HeaderContainerProps {
  children?: React.ReactNode;
}

export class HeaderContainer extends React.Component<HeaderContainerProps, object> {
render() {
    const { children } = this.props;
    return (
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            {children}
          </div>
        </div>
      </header>
    );
  }
}

class MainHeader extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <MobileLogo src="images/mobile_logo.png" href="/"/>
        <Logo src="images/logo.png" href="/"/>
        <RightLinks />
      </HeaderContainer>
    );
  }
}

export default MainHeader;