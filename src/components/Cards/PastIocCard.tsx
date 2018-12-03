import * as React from 'react';
import { Col } from 'react-bootstrap';
export interface PastProjectIocCardProp {
  title?: string;
  description?: string;
  href?: string;
}
export class PastProjectIocCard extends React.Component<PastProjectIocCardProp, Object> {
    render() {
    const { title, description } = this.props;
    return (
        <Col sm={6} lg={3}>
        <div className="post_box">
            <img src="images/like_icon.png" alt="" className="like_icon pull-right" />
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <div className="text-right">
                <a href="#">> View Project</a>
            </div>
        </div>
        </Col>
      );
    }
  }
export default PastProjectIocCard;