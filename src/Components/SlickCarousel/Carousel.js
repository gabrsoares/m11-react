
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import blackf from '../../img/black01f.jpg'
import blackm from '../../img/black01m.jpg'
import pinkf from '../../img/pink01f.jpg'
import pinkm from '../../img/pink01m.jpg'
import whitef from '../../img/white01f.jpg'
import whitem from '../../img/white01m.jpg'
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
                },
            {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
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
                initialSlide: 1,
                arrows: false
            }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                arrows: false
            }
            }
        ]
    };

    const windowSize = window.innerWidth

    const customWidth = windowSize >= 1024? '70%' : windowSize >= 768? '80%' : windowSize >= 450? '90%' : '100%'

    return (
      <div className="slider-menu">
        <h2>Display de roupas</h2>
        <Slider {...settings} className="slider-next" style={{width: customWidth, margin: '0 auto'}}>
          <div>
            <img src={blackf } alt="camisa preta feminina" />
          </div>
          <div>
            <img src={blackm} alt="camisa preta masculina" />
          </div>
          <div>
            <img src={pinkf} alt="camisa rosa feminina" />
          </div>
          <div>
            <img src={pinkm} alt="camisa rosa masculina" />
          </div>
          <div>
            <img src={whitef} alt="camisa branca feminina" />
          </div>
          <div>
            <img src={whitem} alt="camisa branca masculina" />
          </div>
        </Slider>
      </div>
    );
  }
}
