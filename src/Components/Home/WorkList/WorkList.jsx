import React from 'react';
import './WorkList.css'
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const WorkList = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

  };
  return (
    <section className="bg-dark p-5 container-fluid">
      <h2 className='text-center font-weight-bold py-5 text-white'>Here are some of <span style={{ color: '#7AB259' }} >our works</span></h2>
      <div className="pt-4"></div>
      <Slider {...settings}>
        <div>
          <img style={{width:'90%'}} class="d-block" src={carousel1} alt="First slide" />
        </div>
        <div>
          <img style={{width:'90%'}} class="d-block" src={carousel2} alt="Second slide" />
        </div>
        <div>
          <img style={{width:'90%'}} class="d-block" src={carousel3} alt="Third slide" />
        </div>
        <div>
          <img style={{width:'90%'}} class="d-block" src={carousel2} alt="Second slide" />
        </div>
      </Slider>
    </section>
  );
};

export default WorkList;