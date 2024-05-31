import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./../../CustomCSS/customCss.css";

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

function Sliderone() {
  const [isWidthLess, setisWidthLess] = useState(window.innerWidth < 460);

  useEffect(() => {
    const handleResize = () => {
      setisWidthLess(window.innerWidth < 460);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { dots: false, arrows: false } },
    ],
  };
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isBottom, setIsBottom] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsBottom(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section id="home" className="slider-area fix p-relative">
        <Slider
          className="slider-active"
          style={{ background: "#141b22" }}
          {...settings}
        >
          <div>
            <div
              className="single-slider slider-bg"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"https://www.iitdh.ac.in/sites/default/files/2023-10/slide-02-new_3.jpg"})`, // banner image 1 with overlay
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="slider-content s-slider-content mt-130">
                      <h5 data-animation="fadeInUp" data-delay=".4s">
                        welcome To CDC
                      </h5>
                      <h2
                        className="text-white"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                        style={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        Career Development Cell {isWidthLess ? null : <br />}
                        IIT Dharwad
                      </h2>

                      <p data-animation="fadeInUp" data-delay=".6s">
                        CDC is a student-driven body of IIT Dharwad that
                        supports the student community in shaping and managing
                        their careers by building critical ingredients required
                        for a student to be a complete professional.
                      </p>
                      <div
                        className="slider-btn mt-30"
                        style={isDesktop ? { width: "1100px" } : {}}
                      >
                        <Link
                          to="/about"
                          className="btn ss-btn mr-15"
                          data-animation="fadeInLeft"
                          data-delay=".4s"
                        >
                          Discover More{" "}
                          <i className="fal fa-long-arrow-right" />
                        </Link>
                        <Link
                          to="/contact"
                          className="btn ss-btn mr-15"
                          data-animation="fadeInLeft"
                          data-delay=".4s"
                        >
                          Contact Us <i className="fal fa-long-arrow-right" />
                        </Link>
                        <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"
                          className="btn ss-btn mr-15"
                          data-animation="fadeInLeft"
                          data-delay=".4s"
                          style={
                            isBottom
                              ? { marginTop: "10px", width: "188px" }
                              : { width: "230px" }
                          }
                        >
                          Job Notification Form{" "}
                          <i className="fal fa-long-arrow-right" />
                        </a>
                        <a
                          href="https://cdc.iitdh.ac.in/portal/inf"
                          target="_blank"
                          className="btn ss-btn mr-15"
                          data-animation="fadeInLeft"
                          data-delay=".4s"
                          style={
                            isBottom
                              ? { marginTop: "10px", width: "228.5px" }
                              : { width: "272px" }
                          }
                        >
                          Internship Notification Form{" "}
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 p-relative"></div>
                </div>
              </div>
            </div>
          </div>

          {/* this is for second image in slider */}

          {/* <div>
            <div
              className="single-slider slider-bg"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.iitdh.ac.in/sites/default/files/2023-10/slide-03-new.jpg")`, // banner image 2 with overlay
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="slider-content s-slider-content mt-130">
                      <h5 data-animation="fadeInUp" data-delay=".4s">
                        welcome To CDC
                      </h5>
                      <h2
                        className="text-white"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                        style={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        Career Development Cell {isWidthLess ? null : <br />}
                        IIT Dharwad
                      </h2>

                      <p data-animation="fadeInUp" data-delay=".6s">
                        CDC is a student-driven body of IIT Dharwad that supports the student community in
                        shaping and managing their careers by building critical
                        ingredients required for a student to be a complete
                        professional.
                      </p>
                      <div className="slider-btn mt-30">
                        <Link
                          to="/about"
                          className="btn ss-btn mr-15"
                          data-animation="fadeInLeft"
                          data-delay=".4s"
                        >
                          Discover More{" "}
                          <i className="fal fa-long-arrow-right" />
                        </Link>
                        <Link
                          to="/contact"
                          className="btn ss-btn mr-15"
                          data-animation="fadeInLeft"
                          data-delay=".4s"
                        >
                          Contact Us <i className="fal fa-long-arrow-right" />
                        </Link>
                        <a href="https://cdc.iitdh.ac.in/portal/jnf" target="_blank"

                                className="btn ss-btn mr-15"
                                data-animation="fadeInLeft"
                                data-delay=".4s"
                                style={
                                isBottom
                                ? {marginTop: "10px",width:"150px"}
                                : {width:"150px"}
                                }
                                >
                                JNF <i className="fal fa-long-arrow-right" />
                                </a>
                        <a
                        href="https://cdc.iitdh.ac.in/portal/inf" target="_blank"
                        className="btn ss-btn mr-15"
                        data-animation="fadeInLeft"
                        data-delay=".4s"
                        style={
                        isBottom
                        ? {marginTop: "10px",width:"129.5px"}
                        : {width:"129.5px"}
                        }
                        >
                        INF <i className="fal fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 p-relative"></div>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </section>

      <section className="service-details-two p-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <div className="services-box07 homeBlocks">
                <div className="sr-contner">
                  {/* <div className="icon">
                    <img src="assets/img/icon/sve-icon4.png" alt="icon01" />
                  </div> */}
                  <div className="text">
                    <h5>
                      <Link to="/about">Academic Programs</Link>
                    </h5>
                    <p>
                      IIT Dharwad offers top-notch UG and PG programs, fostering
                      academic excellence and research
                    </p>
                    <Link
                      to="https://www.iitdh.ac.in/programs"
                      style={
                        isDesktop
                          ? { position: "absolute", bottom: "24px" }
                          : {}
                      }
                    >
                      Know More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="services-box07 active homeBlocks">
                <div className="sr-contner">
                  {/* <div className="icon">
                    <img src="assets/img/icon/sve-icon5.png" alt="icon01" />
                  </div> */}
                  <div className="text">
                    <h5>
                      <Link to="/placement">Connect with us</Link>
                    </h5>
                    <p>
                      Have oppurtunity for Students of IIT Dharwad? Refer to
                      "For Recruiters " section above
                    </p>
                    <Link
                      to="/placement"
                      style={
                        isDesktop
                          ? { position: "absolute", bottom: "24px" }
                          : {}
                      }
                    >
                      Know More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="services-box07 homeBlocks">
                <div className="sr-contner">
                  {/* <div className="icon">
                    <img src="assets/img/icon/sve-icon6.png" alt="icon01" />
                  </div> */}
                  <div className="text">
                    <h5>
                      <Link to="https://drive.google.com/file/d/1QpP0K4J6AXiFcezI-mBRzrpesci0gsAh/view">
                        Read our brochure
                      </Link>
                    </h5>
                    <p>
                      Discover detailed insights through our meticulously
                      crafted informational brochure.
                    </p>
                    <Link
                      to="https://drive.google.com/file/d/1QpP0K4J6AXiFcezI-mBRzrpesci0gsAh/view"
                      style={
                        isDesktop
                          ? { position: "absolute", bottom: "24px" }
                          : {}
                      }
                    >
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sliderone;
