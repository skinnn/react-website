import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  // Can't change state here - setState()
  render() {
    return (
    <div id="myCarousel" className="carousel slide fixedCarousel-pocetna" data-ride="carousel">
    {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner carousel-inner-pocetna" role="listbox">
        <div className="item active">
          <img className="first-slide slides" src="img/carousel/slide1.png" alt="First slide" />
        </div>
        <div className="item">
          <img className="second-slide slides" src="img/carousel/slide2.png" alt="Second slide" />
        </div>
        <div className="item">
          <img className="third-slide slides" src="img/carousel/slide3.png" alt="Third slide" />
        </div>
      </div>
      <a className="left carousel-control controlLeft" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control controlRight" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    );
  }
}

export default Carousel;
