import * as React from 'react';
import { Row, Col, Tab, Nav , NavItem, Button } from 'react-bootstrap';
import TabcardDetails from '../../components/Cards/IcoProjectCard';
export class Sectionheading extends React.Component {
  render() {
    return (
      <div className="section_heading text-left">
        <h1>ICO <span>Projects</span></h1>
      </div>
    );
  }
}

export class TabnavButton extends React.Component {
    render() {
      return (
        <Col sm={2} className="pill_main_box">
            <Nav bsStyle="pills tab_btn">
                <NavItem eventKey="first">Popularity Score</NavItem>
                <NavItem eventKey="second">Likes</NavItem>
                <NavItem eventKey="third">Bonus Amount</NavItem>
                <NavItem eventKey="fourth">Ending Date</NavItem>
            </Nav>
        </Col>
      );
    }
  }
export class TabmainCont extends React.Component {
    render() {
      return (
        <Col sm={10} className="content_main_box">
            <Tab.Content  className="tab_content_box">
                <Tab.Pane eventKey="first">
                    <Row>
                        <TabcardDetails 
                         title="Matchroom"
                         description="Matchroom strives to deliver a social gaming platform with the
                         capacity to become a centralized gaming hub where all stakeholders may engage
                         and interact through its platform."
                         options=""
                         rating={8.5}
                         saved={true}
                         time="24:04:40:00 left"
                         src="images/tabimage1.png"
                         percentage="35"
                        />
                        <TabcardDetails 
                         title="Invacio"
                         description="Invacio - an outstanding achievement in the worlds of Artificial
                         Intelligence, Communications, Finance and Big Data. Blockchain and A.I Collide."
                         options=""
                         rating={7.5}
                         saved={true}
                         time="Presale in 3 days"
                         src="images/tabimage2.png"
                         percentage="35"
                        />
                        <TabcardDetails 
                         title="Opporty"
                         description="Opporty - Ethereum A B2B Marketplace Platform Powered by the
                         Blockchain Proof-of-Expertise — Distributed Trust Protocol."
                         options=""
                         rating={8.1}
                         saved={true}
                         time="05:02:15:20 left"
                         src="images/tabimage3.png"
                         percentage="30"
                        />
                        <TabcardDetails 
                         title="WandX"
                         description="WandX enables users to create, trade, and settle any portfolio of Tokens
                         issued on Ethereum through smart contracts."
                         options=""
                         rating={9.2}
                         saved={true}
                         time="Presale in 12 days"
                         src="images/tabimage4.png"
                         percentage="18"
                        />
                        <TabcardDetails 
                         title="Spectrum Protocol"
                         description="Spectrum Protocol is a decentralized registry
                         of music copyright, powered by blockchain technology."
                         options=""
                         rating={9.5}
                         saved={true}
                         time="Presale in 7 days"
                         src="images/tabimage5.png"
                         percentage="20"
                        />
                        <TabcardDetails 
                         title="Phantasma Protocol"
                         description="Next-generation content distribution.
                         Decentralized, fast and secure."
                         options=""
                         rating={8.3}
                         saved={true}
                         time="01:08:25:30 left"
                         src="images/tabimage6.png"
                         percentage="18"
                        />
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                        <TabcardDetails 
                         title="Matchroom"
                         description="Matchroom strives to deliver a social gaming platform with the
                         capacity to become a centralized gaming hub where all stakeholders may engage
                         and interact through its platform."
                         options=""
                         rating={8.5}
                         saved={true}
                         time="24:04:40:00 left"
                         src="images/tabimage1.png"
                         percentage="35"
                        />
                        <TabcardDetails 
                         title="Invacio"
                         description="Invacio - an outstanding achievement in the worlds of Artificial
                         Intelligence, Communications, Finance and Big Data. Blockchain and A.I Collide."
                         options=""
                         rating={7.5}
                         saved={true}
                         time="Presale in 3 days"
                         src="images/tabimage2.png"
                         percentage="35"
                        />
                        <TabcardDetails 
                         title="Opporty"
                         description="Opporty - Ethereum A B2B Marketplace Platform Powered by the
                         Blockchain Proof-of-Expertise — Distributed Trust Protocol."
                         options=""
                         rating={8.1}
                         saved={true}
                         time="05:02:15:20 left"
                         src="images/tabimage3.png"
                         percentage="30"
                        />
       
                        <TabcardDetails 
                         title="WandX"
                         description="WandX enables users to create, trade, and settle any portfolio of Tokens
                         issued on Ethereum through smart contracts."
                         options=""
                         rating={9.2}
                         saved={true}
                         time="Presale in 12 days"
                         src="images/tabimage4.png"
                         percentage="18"
                        />
                        <TabcardDetails 
                         title="Spectrum Protocol"
                         description="Spectrum Protocol is a decentralized registry
                         of music copyright, powered by blockchain technology."
                         options=""
                         rating={9.5}
                         saved={true}
                         time="Presale in 7 days"
                         src="images/tabimage5.png"
                         percentage="20"
                        />
                        <TabcardDetails 
                         title="Phantasma Protocol"
                         description="Next-generation content distribution.
                         Decentralized, fast and secure."
                         options=""
                         rating={8.3}
                         saved={true}
                         time="01:08:25:30 left"
                         src="images/tabimage6.png"
                         percentage="18"
                        />
                    </Row>
                </Tab.Pane>
            </Tab.Content>
        </Col>
      );
    }
  }
export class IcoProject extends React.Component {
  render() {
    return (
        <div className="icosection">
          <div className="container">
              <Sectionheading />
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="clearfix">
                      <TabnavButton />
                      <TabmainCont />
                  </Row>
              </Tab.Container>
              <Button className="view_more_btn">View More</Button>    
            
          </div>
        </div>
    );
  }
}
export default IcoProject;