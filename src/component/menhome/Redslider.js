import React from "react";
import Slider from "react-slick";
import CssData from "./../../CustomCSS/RedsilderCSS.json";

function Redslider() {
  function importAllImages(r) {
    return r.keys().map(r);
  }

  // Import all images from the 'images' folder
  const images = importAllImages(
    require.context(
      "./../../assets/img/Past_recruiters",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
  };

  return (
    <div
      className="brand-area pt-60 pb-60"
      style={{ backgroundColor: "#ff7350" }}
    >
      <div className="container">
        <Slider className="row brand-active" {...settings}>
          {images.map((image, index) => (
            <div key={index} className="col-xl-2">
              <div className="single-brand">
                <img
                  src={image}
                  alt="img"
                  style={CssData.imageStyles}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Redslider;
