import React from 'react'
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        type="button"
        className={`slick-next ${className}`}
        style={{ ...style }}
        onClick={onClick}
        >
        <i className="far fa-angle-right"></i>
        </button>
    );
}
  
function SamplePrevArrow(props) {
const { className, style, onClick } = props;
return (
    <button
    type="button"
    className={`slick-prev ${className}`}
    style={{ ...style }}
    onClick={onClick}
    >
    <i className="far fa-angle-left"></i>
    </button>
);
}

function Testimonial() {

     let settings = {
        dots: true,
        infinite: true,
        arrows: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };

  return (
    <>
       <section className="testimonial-area pt-120 pb-115 p-relative fix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                            <h5>
                                <i className="fal fa-graduation-cap" /> Testimonial
                            </h5>
                            
                            <h2>What Our Clients Says</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <Slider className="slider-active testimonial-active wow fadeInUp animated testimonial-area3" data-animation="fadeInUp" data-delay=".4s" {...settings}>

                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p>
                                Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices
                                ligula aliquet odio tristique euismod. Donec efficitur dolor in
                                turpis aliquet, at mollis.
                                </p>
                                <div className="testi-author">
                                    <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                </div>
                                <div className="ta-info">
                                <h6>Margie Dose</h6>
                                <span>Web Developer</span>
                                </div>
                            </div>

                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p>
                                Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices
                                ligula aliquet odio tristique euismod. Donec efficitur dolor in
                                turpis aliquet, at mollis.
                                </p>
                                <div className="testi-author">
                                    <img src="assets/img/testimonial/testi_avatar_02.png" alt="img" />
                                </div>
                                <div className="ta-info">
                                <h6>Rock Dloder</h6>
                                <span>Web Developer</span>
                                </div>
                            </div>

                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p>
                                Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices
                                ligula aliquet odio tristique euismod. Donec efficitur dolor in
                                turpis aliquet, at mollis.
                                </p>
                                <div className="testi-author">
                                    <img src="assets/img/testimonial/testi_avatar_03.png" alt="img" />
                                </div>
                                <div className="ta-info">
                                <h6>Roboto Eorure</h6>
                                <span>Web Developer</span>
                                </div>
                            </div>

                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p>
                                Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices
                                ligula aliquet odio tristique euismod. Donec efficitur dolor in
                                turpis aliquet, at mollis.
                                </p>
                                <div className="testi-author">
                                    <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                </div>
                                <div className="ta-info">
                                <h6>Margie Dose</h6>
                                <span>Web Developer</span>
                                </div>
                            </div>
                            
                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p>
                                Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices
                                ligula aliquet odio tristique euismod. Donec efficitur dolor in
                                turpis aliquet, at mollis.
                                </p>
                                <div className="testi-author">
                                    <img src="assets/img/testimonial/testi_avatar_02.png" alt="img" />
                                </div>
                                <div className="ta-info">
                                <h6>Rock Dloder</h6>
                                <span>Web Developer</span>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default Testimonial