import * as React from 'react';
import { Carousel } from 'react-bootstrap';

class CarouselMain extends React.Component {
  render() {
    return (
      <div className="container slide_container">
      <div className="row">
      <div className="col-md-3">
        <h1 className="heading_left">
          <span>Latest</span> News
        </h1>
      </div>
      <div className="col-md-9">
      <Carousel 
        className="home_slider" 
        controls={true}
        indicators={true}
        interval={3000}
      >
        <Carousel.Item className="banner1">
            <div className="">
              <aside className="carousel-caption">
                <img src="images/slide1.png" alt="" />
              </aside>
              <div className="slider_data">
                <h1>How Blockchain is Revolutionizing Finance</h1>
                <p>Blockchain is one of the most crucial innovations in the finance sector since
                  the advent of money, and there is already a buzz out there on how it would change
                  the world. The same way Uber transformed the private-transportation sector, and Airbnb
                  the travel industry is the same way Blockchain will
                  revolutionize the financial industry.</p>
                <p className="post_date">MARCH 15, 2018</p>    
              </div>
            </div>
        </Carousel.Item>
        <Carousel.Item className="banner1">
            <div className="">
              <aside className="carousel-caption">
                <img src="images/slide2.png" alt="" />
              </aside>
              <div className="slider_data">
                <h1>How Blockchain is Revolutionizing Finance</h1>
                <p>Blockchain is one of the most crucial innovations in the finance sector since
                  the advent of money, and there is already a buzz out there on how it would change
                  the world. The same way Uber transformed the private-transportation sector, and Airbnb
                  the travel industry is the same way Blockchain will
                  revolutionize the financial industry.</p>
                <p className="post_date">MARCH 15, 2018</p>  
              </div>
            </div>  
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
      </div>
    );
  }
}

export default CarouselMain;
