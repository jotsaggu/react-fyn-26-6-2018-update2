import * as React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { ProgressPercentage } from '../../components/Cards/SuccessCard';
export interface FeatureCardProps {
  title?: string;
  description?: string;
  src?: string;
  options?: string;
  rating?: number;
  saved?: boolean;
  time?: string;
  href?: string;
  ethValue?: number;
  percentageValue?: number;
}

export class FeatureImg extends React.Component<FeatureCardProps, Object> {
  render() {
    const { src } = this.props;
    return (
      <div className="images_box">
        <img src={src} alt="" className="company_img" />
        <img src="images/pre_ico.png" className="pre_tag" />
      </div>
    );
  }
}
export class FeatureDis extends React.Component<FeatureCardProps, Object> {
  render() {
    const { title, description } = this.props;
    return (
      <div className="description_box">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <div className="tag_box">
              <span>ICO POOL</span>
              <span>KYC</span>
          </div>
      </div>
    );
  }
}
export class RateBox extends React.Component<FeatureCardProps, Object> {
  render() {
    const { rating } = this.props;
    return (
      <div className="rate_box">
          <span>
          <img src="images/saved.png" alt="" />Saved
          </span>
          <span>
              <img src="images/rate.png" alt="" />{rating}
          </span>
      </div>
    );
  }
}
export class ViewPro extends React.Component<FeatureCardProps, Object> {
  render() {
    const { href } = this.props;
    return (
      <a href={href}><Button className="view_btn">View Project</Button></a>
    );
  }
}
export class TimerBox extends React.Component<FeatureCardProps, Object> {
  render() {
    const { time } = this.props;
    return (
      <div className="timer">
          <span><img src="images/time.png" alt="" /></span>{time}
      </div>
    );
  }
}
export class RightBoxContent extends React.Component {
  render() {
    return (
      <div className="right_content">
          <RateBox {...this.props} />
          <TimerBox {...this.props} />
          <ViewPro {...this.props} />
      </div>
    );
  }
}
export class FeatureIocCard extends React.Component<FeatureCardProps, Object> {
  render() {
    const { ethValue, percentageValue } = this.props;
    return (
      
      <div className="list_box">
          <Row className="list_row">
            <Col md={3} sm={4}>
                <FeatureImg {...this.props} />
            </Col>
            <Col md={6} sm={8} className="feature_details_box">
                <FeatureDis {...this.props}/>
                <ProgressPercentage 
                  ethValue={(ethValue) ? ethValue : 0} 
                  percentageValue={(percentageValue) ? percentageValue : 0}
                />
            </Col>
            <Col md={3} sm={12}>
                  <RightBoxContent {...this.props} />
            </Col>
          </Row>
      </div>  
      
    );
  }
}

export default FeatureIocCard;