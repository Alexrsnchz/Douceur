import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel_1 from "./../img/carousel_1.jpg";
import carousel_2 from "./../img/carousel_2.jpg";
import carousel_3 from "./../img/carousel_3.jpg";
import carousel_4 from "./../img/carousel_4.jpg";

function Carousel() {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    draggable: false,
    fade: true,
    infinite: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 2000,
    swipe: false,
    touchMove: false,
  };

  const overlayText = "Your Overlay Text Here";

  return (
    <div className="slider-container opacity-70">
      <Slider {...settings}>
        <div>
          <img src={carousel_1} alt={carousel_1} />
        </div>
        <div>
          <img src={carousel_2} alt={carousel_2} />
        </div>
        <div>
          <img src={carousel_3} alt={carousel_3} />
        </div>
        <div>
          <img src={carousel_4} alt={carousel_4} />
        </div>
      </Slider>
      <div className="absolute inset-0 flex items-center justify-center text-white text-xl z-10 pointer-events-none">{overlayText}</div>
    </div>
  );
}

export default Carousel;
