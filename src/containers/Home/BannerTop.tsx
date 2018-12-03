import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class BannerContent extends React.Component {
    render() {
        return(
            <div className="image_box">
                <p>KATALYSE.io</p>
                <h1>Make Great Ideas Happen</h1>
            </div>
        );
    }
}
export class BannerloginLink extends React.Component {
    render() {
        return(
            <div className="login_link">
                <span><img src="images/facebook.png" alt="" /></span>
                <span><img src="images/twitter.png" alt="" /></span>
                <span><img src="images/telegram.png" alt="" /></span>
                <span><img src="images/m_ioc.png" alt="" /></span>
            </div>
        );

    }
}
export class BannerloginTitle extends React.Component {
    render() {
        return(
            <h3 className="title">One Stop Crowdfunding Platform for Project Creators</h3>
        );

    }
}
export class BannerloginDescription extends React.Component {
    render() {
        return(
            <p className="description">
            Katalyse.io is a one stop crowdfunding platform, where
            we offer creators the option to do both non-ICO and ICO projects
            on our website and raise funding in crypto or cash in selected countries.
            </p>
        );

    }
}

export class BannerloignBtn extends React.Component {
    render() {
        return (
            <div>
                <Button className="login_btn">Login to explore more</Button>
                <Button className="login_btn">Sign up with Google</Button>
            </div>
    );
    }
} 
export class BannerTop extends React.Component {
  render() {
    return (
        <div className="container-fluid banner_top_sec">
            <Row className="banner_row">
                <Col sm={12} className="main_banner_box">
                    <BannerContent />
                    <div className="login_box">
                        <BannerloginTitle />
                        <BannerloginDescription />
                        <BannerloginLink />
                        <BannerloignBtn /> 
                    </div>
                </Col>
            </Row>
        </div>
    );
  }
}
export default BannerTop;