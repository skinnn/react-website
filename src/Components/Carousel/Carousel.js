import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  // Can't change state here - setState()
  render() {
    return (
    <div id="myCarousel" class="carousel slide fixedCarousel-pocetna" data-ride="carousel">
    {/* Indicators */}
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner carousel-inner-pocetna" role="listbox">
        <div class="item active">
          <img class="first-slide slides" src="img/carousel/slide1.png" alt="First slide" />
        </div>
        <div class="item">
          <img class="second-slide slides" src="img/carousel/slide2.png" alt="Second slide" />
        </div>
        <div class="item">
          <img class="third-slide slides" src="img/carousel/slide3.png" alt="Third slide" />
        </div>
      </div>
      <a class="left carousel-control controlLeft" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control controlRight" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    );
  }
}

export default Carousel;
