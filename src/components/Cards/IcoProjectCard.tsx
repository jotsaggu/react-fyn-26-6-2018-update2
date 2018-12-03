import * as React from 'react';
import { Col } from 'react-bootstrap';
export interface TabcardDetailsProp {
  title?: string;
  description?: string;
  src?: string;
  rating?: number;
  saved?: boolean;
  time?: string;
  href?: string;
  options?: string;
  percentage?: string;
}
export class TabContImage extends React.Component<TabcardDetailsProp, Object> {
    render() {
    const { src } = this.props;
    return (
        <div className="tab_box">
            <div className="img_outer">
                <img src={src} alt="" />
            </div>
            <div className="status_tag">
                <p>Ongoing ICO</p>
            </div>
        </div>
      );
    }
  }
export class TabConatTitle extends React.Component<TabcardDetailsProp, Object> {
    render() {
    const { title } = this.props;
    return (
        <div className="tab_title">
            <h3 className="pull-left">{title}</h3>
            <span className="pull-right">
                <img src="images/like_icon2.png" />
            </span>
            <div className="clearfix" />
        </div>
      );
    }
  }
export class TabConatRating extends React.Component<TabcardDetailsProp, Object> {
    render() {
    const { rating } = this.props;
    return (
        <div className="tab_rating text-left">
            <img src="images/rate.png" /> {rating} rating
        </div>
      );
    }
  }
export class TabConatDescription extends React.Component<TabcardDetailsProp, Object> {
    render() {
    const { description } = this.props;
    return (
        <div className="tab_description">
            <p>{description}</p>
        </div>
      );
    }
  }
export class TabConatTimer extends React.Component<TabcardDetailsProp, Object> {
    render() {
    const { time, percentage } = this.props;
    return (
        <div className="timer_bottom">
            <span className="pull-left time_left">
                <img src="images/time.png" alt="" /> {time}
            </span>
            <span className="pull-right">
                <img src="images/bonus.png" alt="" /> {percentage}% Bonus
            </span>
            <div className="clearfix" />
        </div>
      );
    }
  }
export class TabcardDetails extends React.Component<TabcardDetailsProp, Object> {
    render() {
      return (
        <Col sm={12} lg={4}>
            <div className="top_wraper">
                <TabContImage {...this.props} />
                <div className="tab_description_box">
                    <TabConatTitle {...this.props}/>
                    <TabConatRating {...this.props}/>
                    <TabConatDescription {...this.props}/>
                    <TabConatTimer {...this.props}/>
                </div>
            </div>
         </Col>
      );
    }
  }
export default TabcardDetails;