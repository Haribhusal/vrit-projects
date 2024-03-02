import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="overflow-hidden img_slider_custom">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/id/23/600/400" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/id/23/600/400" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/id/23/600/400" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/id/23/600/400" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/id/23/600/400" alt="" />
        </div>
      </Slider>
    </section>
  );
}

export default SimpleSlider;
