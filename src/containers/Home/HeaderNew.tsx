import * as React from 'react';
import { NavItem, Navbar, Nav } from 'react-bootstrap';

export class NameheaderLogo extends React.Component {
    render() {
    return(
          <Navbar.Header>
              <Navbar.Brand>
                <a href="#"><img src="images/logo.png" className="logimage1" /></a>
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
      );
    }
  }
export class NavRightCallapse extends React.Component {
    render() {
    return(
          <Navbar.Collapse className="pull-right nav_mian">
              <Nav>
                  <NavItem eventKey={1} href="#">
                    About Us   
                  </NavItem> 
                  <NavItem eventKey={2} href="#">
                    Talent Marketplace  
                  </NavItem> 
                  <NavItem eventKey={3} href="#">
                    EN 
                  </NavItem> 
                  <NavItem className="publish_btn" eventKey={4} href="#">
                    <span className="orange_btn">Publish Your ICO</span>   
                  </NavItem> 
              </Nav>
          </Navbar.Collapse>
      );
    }
  }
export class MainHeader2  extends React.Component {
render() {
      return(
         <div className="header">
            <Navbar collapseOnSelect={true}>
                <NameheaderLogo />
                <NavRightCallapse />
            </Navbar>
          </div>
      );
    }
  }
  
export default MainHeader2;