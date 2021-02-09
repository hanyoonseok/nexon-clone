import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './css/Slider.css'

export default function simpleSlider(){
    var settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        cssEase:"linear",
        className:"slides",
        draggable:false,
  };
    return(
        <div className="slider-container">
            <Slider {...settings}>
                    <button className="slide-btn">1</button>
                    <button className="slide-btn">2</button>
                    <button className="slide-btn">3</button>
                    <button className="slide-btn">4</button>
                    <button className="slide-btn">5</button>
                    <button className="slide-btn">6</button>
                    <button className="slide-btn">7</button>
                    <button className="slide-btn">8</button>
                    <button className="slide-btn">9</button>
                    <button className="slide-btn">10</button>
                    <button className="slide-btn">11</button>
                    <button className="slide-btn">12</button>
                    <button className="slide-btn">13</button>
                    <button className="slide-btn">14</button>
                    <button className="slide-btn">15</button>
            </Slider>
        </div>
    )
}