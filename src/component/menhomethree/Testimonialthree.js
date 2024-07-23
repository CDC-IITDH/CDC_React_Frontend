import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import CssData from "./../../CustomCSS/TestimonialthreeCSS.json";

import directorImg from "./../../assets/img/director/Director.jpeg";
import deanApImg from "./../../assets/img/director/dean_ap.jpg";
import deanRndImg from "./../../assets/img/director/dean_rnd.jpeg";
import FICImg from "./../../assets/img/director/Satya_Priya_Image.jpeg";
import FICImg2 from "./../../assets/img/team/ankit_v_k.JPG";

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

function Testimonialthree() {
  const testimonials = [
    {
      id: 1,
      title: " Director's Message",
      quote:
        "Dear Esteemed HR Representatives, a warm welcome awaits you at the Indian Institute of Technology Dharwad (IITDh). It brings me immense joy to extend this invitation to your esteemed organizations for the placement of our talented students. Established in July 2016, IITDh has expanded significantly, offering a spectrum of programs from B.Tech to PhD across various disciplines. Presently situated in a transit campus sprawling over 135 acres at WALMI, equipped with 25 buildings, 11 hostels, laboratories, and more, IITDh is poised for growth in Chikkamalligawad village, allotted by the Karnataka Government for its permanent campus. Our library, boasting 5000 books and access to 8500 research journals, complements the academic vigor of our 900 students, hailing from 21 states with a commendable 20% representation of women. With a faculty of 70 members, each holding prestigious qualifications and significant research accolades, our institute has garnered impressive sponsored projects and publications. It would be an honor to have your presence on our campus, providing an opportunity for our exceptional students to showcase their aptitude and readiness to contribute to your esteemed organization. We assure you of the quality and readiness of our students and eagerly anticipate fostering a lasting and mutually beneficial relationship with your organization through our placement drive.",
      authorName: "Venkappayya R Desai",
      authorRole: "Director, IIT Dharwad",
      imgSrc: directorImg,
    },
    {
      id: 2,
      title: "Faculty In Charge's Message",
      quote:
        "It gives me great pleasure to invite you to visit Indian Institute of Technology, dhArwAD for the placement and internship season 2024-2025. We are confident that our students will deliver the things in real time environments and surpass all expectations when it comes to fulfilling organizational objectives. I look forward to continuing a fruitful relationship.",
      authorName: "Prof. Satyapriya Gupta",
      authorRole: "Dept. of Mechanical, Materials and Aerospace Engineering",
      imgSrc: FICImg,
    },
    {
      id: 3,
      title: "Faculty In Charge's Message",
      quote:
        "Dear Esteemed Guests, it brings me immense pleasure to extend a heartfelt invitation on behalf of the entire IIT Dharwad community. We eagerly anticipate your involvement in hiring interns from pre-final year students. We believe your visit will mark the beginning of a promising and enduring relationship between our esteemed Institute and your organization.",
      authorName: "Prof. Aniket Kataware",
      authorRole: "Dept. of Civil & Infrastructure Engineering",
      imgSrc: FICImg2,
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    responsive: [
      { breakpoint: 1200, settings: { dots: false, arrows: false } },
    ],
  };

  return (
    <section
      className="testimonial-area text-center pt-50 pb-50 slider-area fix p-relative"
      style={{
        background: "#dee0df",
        backgroundSize: "cover",
        padding: "auto",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-120">
            <Slider
              className="slider-active wow fadeInUp  animated testimonial-active2  testimonial-area3"
              data-animation="fadeInUp"
              data-delay=".4s"
              {...settings}
            >
              {testimonials.map((testimonial) => (
                <div
                  className="single-testimonial-outer"
                  key={testimonial.id}
                  style={CssData.singleTestimonials}
                >
                  <div className="single-testimonial">
                    <div className="qt-img">
                      <img
                        src={require("./../../assets/img/testimonial/qt-icon.png")}
                        alt=""
                      />{" "}
                      <span style={CssData.titleStyle}>
                        {testimonial.title}
                      </span>
                    </div>
                    <p className="truncate-text" style={CssData.InfoStyle}>
                      {testimonial.quote.length > 700
                        ? `${testimonial.quote.substring(0, 737)}...`
                        : testimonial.quote}
                      {testimonial.quote.length > 700 && (
                        <Link to="/Directors-Message" style={CssData.readMore}>
                          Read more
                        </Link>
                      )}
                    </p>
                    <div className="testi-author">
                      <img
                        src={testimonial.imgSrc}
                        alt="img"
                        style={CssData.imageStyles}
                      />
                      <div className="ta-info">
                        <h6>{testimonial.authorName}</h6>
                        <span>{testimonial.authorRole}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonialthree;
