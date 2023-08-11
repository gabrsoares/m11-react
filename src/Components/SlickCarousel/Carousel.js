
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import black01 from '../../img/black01.jpg'
import white01 from '../../img/white01.jpg'
import './Carousel.css'

export default class Carousel extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
                },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
            }
        ]
    };

    const customWidth = window.innerWidth >= 1024? '70%' : window.innerWidth >= 768? '80%' : window.innerWidth >= 450? '90%' : '100%'

    return (
      <div className="slider-menu">
        <h2>Display de roupas</h2>
        <Slider {...settings} className="slider-next" style={{width: customWidth, margin: '0 auto'}}>
          <div>
            <img src={black01} alt="camisa preta" />
          </div>
          <div>
            <img src={white01} alt="camisa branca" />
          </div>
          <div>
            <img src={white01} alt="camisa branca" />
          </div>
          <div>
            <img src={white01} alt="camisa branca" />
          </div>
          <div>
            <img src={white01} alt="camisa branca" />
          </div>
          <div>
            <img src={white01} alt="camisa branca" />
          </div>
        </Slider>
      </div>
    );
  }
}
