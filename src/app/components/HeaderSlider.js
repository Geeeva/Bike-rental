import React, {useState} from 'react'
import Swiper from 'react-id-swiper';

import image1 from "../../assets/images/back2.jpg";
import image2 from "../../assets/images/bg-feedback.jpg";
import image3 from "../../assets/images/back8.jpg";

import "./HeaderSlider.css";

const HeaderSliderConf = {
    containerClass: "swiper-container header-slider",
    parallax: true,
    centeredSlides: true,
    grabCursor: true,
    speed: 500,
    spaceBetween: 0,
    effect: 'slide',
    
}

    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }

const HeaderSlider = () => {
    const [parallaxSwiper, setParallaxSwiper] = useState(null);
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    const parallaxOpacity = 0.5;
    return (
        <Swiper {...HeaderSliderConf} {...params}getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image1} alt="image1"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold color-slider">BEST BIKE FOR YOU</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold color-slider">BEST BIKE FOR YOU</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image3} alt="image3"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold color-slider">BEST BIKE FOR YOU</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
    </Swiper>
    )
}
export default HeaderSlider;