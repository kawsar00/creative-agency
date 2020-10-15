import React from 'react';
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      autoplaySpeed: 2000,
  };
  return (
    <section className="w-50 m-auto">
      <h2 className='text-center font-weight-bold'>Here are some of <span style={{ color: '#7AB259' }} >our works</span></h2>
      <Slider {...settings}>
        <div className="">
        <img class="d-block w-100" src={carousel1} alt="First slide" />
        </div>
        <div>
        <img class="d-block w-100" src={carousel2} alt="First slide" />
        </div>
        <div>
        <img class="d-block w-100" src={carousel3} alt="First slide" />
        </div>
      </Slider>
      {/* <div className="py-5">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={carousel1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={carousel2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={carousel3} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default WorkList;