import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

export class SubscribeSec extends React.Component {
  render() {
    return (
        <div  className="subs_section">
        <div className="container">
            <div className="section_heading text-center">
                <h1>Subscribe <span>to get the latest updates</span></h1>
            </div>
            <div className="subs_box">
                <Row>
                    <Col sm={8}>
                        <FormControl
                            type="text"
                            placeholder="Your email here"
                        />
                    </Col>
                    <Col sm={4}>
                        <Button className="subscribe_btn">Subscribe now</Button>
                    </Col>
                </Row>
            </div>
        </div>
        </div>
    );
  }
}
export default SubscribeSec;