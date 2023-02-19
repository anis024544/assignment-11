import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./BooksCarousel.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  


export default class SimpleSlider extends Component {
  render() {
    const settings = {
    arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      row: 1,
      autoplay: true,
      slidesPerRow: 1,
      slidesToShow: 5
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
      
    };
    return (
      <div className="">
         <Slider {...settings}>
          {this.props.books.map((book,index) => (
            <div key={index} className=" book-container  bg-white d-flex justify-content-center align-items-center flex-column">
              <div className="book-circle">
                <img src={book.img} alt="" />
              </div>
                <h5 className="book-title text-dark w-50 text-center">{book.text}</h5>
            </div>
            
          ))}
        </Slider>
      </div>
    );
  }
}



