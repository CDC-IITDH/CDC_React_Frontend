import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Cdc_Logos/cdc_logo.png";
function Main() {
  const [Btnshow, setBtnshow] = useState(false);
  const [mobile, setmobile] = useState(false);
  const [Events, setEvent] = useState(false);
  const [News, setNews] = useState(false);
  const [Services, setServices] = useState(false);
  const [Blog, setblog] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header-area header-three">
        <div
          id="header-sticky"
          className={`menu-area${isScrolled ? "menu-area sticky-menu" : ""}`}
        >
          <div className="container">
            <div className="second-menu">
              <div className="row align-items-center p-2">
                <div className="col-xl-3 col-lg-3">
                  <div className="logo" style={{width:'200px' }}> {/* Added a logo and adjusted its width */}
                    <Link to="/">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7" style={{marginLeft:"100px"}}>
                  <div className="main-menu text-right text-xl-right">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-sub">
                          <Link to="/about">About Us</Link>
                        </li>
                        <li className="has-sub">
                          <Link>For Students</Link>
                          <ul>
                            <li>
                              <Link
                                to="https://drive.google.com/file/d/1P8z5w-PVAl3w6p2Z8kWgSDOUPukuMx--/view?usp=sharing"
                                target="_blank"
                              >
                                Placements - Rules & Regulations
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link
                                to="https://drive.google.com/file/d/1PLHd6BiXP7fAbQaob8o0juXZzRSu8vWa/view"
                                target="_blank"
                              >
                                Internships - Rules & Regulations
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link
                                to="https://drive.google.com/file/d/1a8cRL4i3aeEWcCVRQIRAv-DrFybPl9N0/view"
                                target="_blank"
                              >
                                Internship Information
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://cdc.iitdh.ac.in/portal/index.html"
                                target="_blank"
                              >
                                Student Portal
                              </Link>
                            </li>
                            <li>
                              {/* <Link to="/student/faq">
                                FAQs
                              </Link> */}
                            </li>
                            {/* <li>
                              {" "}
                              <Link to="/single-courses-2">
                                Course Details 02
                              </Link>
                            </li> */}
                          </ul>
                        </li>
                        <li className="has-sub">
                          <Link>For Recruiters</Link>
                          <ul>
     
                            <li>
                              <Link to="/placement">Placement</Link>
                            </li>
                            <li>
                              <Link to="/internship">Internship</Link>
                            </li>
                            <li>
                              <Link
                                to="https://drive.google.com/file/d/1QpP0K4J6AXiFcezI-mBRzrpesci0gsAh/view"
                                target="_blank"
                              >
                                Brochure
                              </Link>
                            </li>
                            <li>
                              <Link to="/recruiter/faq">FAQs</Link>
                            </li>
                            {/* <li>
                              <Link to="/pricing">Pricing</Link>
                            </li>
                            <li>
                              <Link to="/faq">Faqs</Link>
                            </li>
                            <li>
                              <Link to="/team">Teacher</Link>
                            </li>
                            <li>
                              <Link to="/team-single">Teacher Details</Link>
                            </li>
                            <li>
                              <Link to="/404-error">404 Error</Link>
                            </li> */}
                          </ul>
                        </li>
                        <li className="has-sub">
                          <Link to="/blog">Blog</Link>
                          {/* <ul>
                            <li>
                              <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                              <Link to="/blog-details">Blog Details</Link>
                            </li>
                          </ul> */}
                        </li>
                        <li className="has-sub">
                          <Link to="/event">Events</Link>
                        </li>
                        <li className="has-sub">
                          <Link to="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile-menu mean-container">
                    <div className="mean-bar">
                      <a
                        href="#"
                        onClick={() => setmobile(!mobile)}
                        className={`meanmenu-reveal ${mobile && "meanclose"}`}
                        style={{
                          right: 0,
                          left: "auto",
                          top: isScrolled ? "auto" : "-10px",
                          textAlign: "center",
                          textIndent: 0,
                          fontSize: 18,
                        }}
                      >
                        {mobile ? (
                          "X"
                        ) : (
                          <span>
                            <span>
                              <span></span>
                            </span>
                          </span>
                        )}
                      </a>
                      {mobile && (
                        <nav className="mean-nav">
                          <ul style={{ display: "block" }}>
                            {/* <li className="has-sub">
                              <Link to="/">Home</Link> */}
                            {/* {Events && (
                                <ul style={{ display: "block" }}>
                                  <li>
                                    <Link to="/">University</Link>
                                  </li>
                                  <li>
                                    <Link to="/home-two">Kindergarten</Link>
                                  </li>
                                  <li>
                                    <Link to="/home-three">High School</Link>
                                  </li>
                                </ul>
                              )} */}
                            {/* <a
                                className={`mean-expand ${
                                  mobile && "mean-clicked"
                                }`}
                                onClick={() => {
                                  setEvent(!Events);
                                }}
                                href="#"
                                style={{ fontSize: 18 }}
                              >
                                {Events ? "-" : "+"}
                              </a> */}
                            {/* </li> */}
                            <li onClick={() => setmobile(!mobile)}>
                              <Link to="/about">About Us</Link>
                            </li>
                            <li className="has-sub">
                              <Link>For Students</Link>
                              {News && (
                                <ul style={{ display: "block" }}>
                                  <li onClick={() => setmobile(!mobile)}>
                                    <Link
                                      to="https://drive.google.com/file/d/1P8z5w-PVAl3w6p2Z8kWgSDOUPukuMx--/view?usp=sharing"
                                      target="_blank"
                                    >
                                      Placements - Rules & Regulations
                                    </Link>
                                  </li>
                                  <li onClick={() => setmobile(!mobile)}>
                                    {" "}
                                    <Link
                                      to="https://drive.google.com/file/d/1PLHd6BiXP7fAbQaob8o0juXZzRSu8vWa/view"
                                      target="_blank"
                                    >
                                      Internships - Rules & Regulations
                                    </Link>
                                  </li>
                                  <li onClick={() => setmobile(!mobile)}>
                                    {" "}
                                    <Link
                                      to="https://drive.google.com/file/d/1a8cRL4i3aeEWcCVRQIRAv-DrFybPl9N0/view"
                                      target="_blank"
                                    >
                                      Internship Information
                                    </Link>
                                  </li>
                                  <li onClick={() => setmobile(!mobile)}>
                                    <Link
                                      to="https://cdc.iitdh.ac.in/portal/index.html"
                                      target="_blank"
                                    >
                                      Student Portal
                                    </Link>
                                  </li>
                                  {/* <li>
                                    <Link to="/student/faq" >
                                      FAQs
                                    </Link>
                                  </li> */}
                                  {/* <li>
                                    {" "}
                                    <Link to="/single-courses-2">
                                      Course Details 02
                                    </Link>
                                  </li> */}
                                </ul>
                              )}

                              <a
                                className={`mean-expand ${
                                  mobile && "mean-clicked"
                                }`}
                                onClick={() => {
                                  setNews(!News);
                                }}
                                href="#"
                                style={{ fontSize: 18 }}
                              >
                                {News ? "-" : "+"}
                              </a>
                            </li>
                            <li className="has-sub">
                              <Link>For Recruiters</Link>
                              {Services && (
                                <ul style={{ display: "block" }}>
                       
                                  <li onClick={() => setmobile(!mobile)}>
                                    <Link to="/placement">Placement</Link>
                                  </li>
                                  <li onClick={() => setmobile(!mobile)}>
                                    <Link to="/internship">Internship</Link>
                                  </li>
                                  <li onClick={() => setmobile(!mobile)}>
                                    <Link
                                      to="https://drive.google.com/file/d/1QpP0K4J6AXiFcezI-mBRzrpesci0gsAh/view"
                                      target="_blank"
                                    >
                                      Brochure
                                    </Link>
                                  </li>
                                  <li onClick={() => setmobile(!mobile)}>
                                    <Link to="/recruiter/faq">FAQs</Link>
                                  </li>
                                  {/* <li>
                                    <Link to="/pricing">Pricing</Link>
                                  </li>
                                  <li>
                                    <Link to="/faq">Faqs</Link>
                                  </li>
                                  <li>
                                    <Link to="/team">Teacher</Link>
                                  </li>
                                  <li>
                                    <Link to="/team-single">
                                      Teacher Details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/404-error">404 Error</Link>
                                  </li> */}
                                </ul>
                              )}
                              <a
                                className={`mean-expand ${
                                  mobile && "mean-clicked"
                                }`}
                                onClick={() => {
                                  setServices(!Services);
                                }}
                                href="#"
                                style={{ fontSize: 18 }}
                              >
                                {Services ? "-" : "+"}
                              </a>
                            </li>
                            <li
                              className="has-sub"
                              onClick={() => setmobile(!mobile)}
                            >
                              <Link to="/blog">Blog</Link>
                              {/* {Blog && (
                                <ul style={{ display: "block" }}>
                                  <li>
                                    <Link to="/blog">Blog</Link>
                                  </li>
                                  <li>
                                    <Link to="/blog-details">Blog Details</Link>
                                  </li>
                                </ul>
                              )}
                              <a
                                className={`mean-expand ${
                                  mobile && "mean-clicked"
                                }`}
                                onClick={() => {
                                  setblog(!Blog);
                                }}
                                href="#"
                                style={{ fontSize: 18 }}
                              >
                                {Blog ? "-" : "+"}
                              </a> */}
                            </li>
                            <li
                              className="has-sub"
                              onClick={() => setmobile(!mobile)}
                            >
                              <Link to="/event">Events</Link>
                            </li>
                            <li
                              className="mean-last"
                              onClick={() => setmobile(!mobile)}
                            >
                              <Link to="/contact">Contact Us</Link>
                            </li>
                          </ul>
                        </nav>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {Btnshow && (
        <>
          <div className={`offcanvas-menu ${"active"}`}>
            <span className="menu-close" onClick={() => setBtnshow(false)}>
              <i className="fas fa-times" onClick={() => setBtnshow(false)} />
            </span>
            <form
              role="search"
              method="get"
              id="searchform"
              className="searchform"
              action="http://wordpress.zcube.in/xconsulta/"
            >
              <input type="text" name="s" id="search" placeholder="Search" />
              <button>
                <i className="fa fa-search" />
              </button>
            </form>
            <div id="cssmenu3" className="menu-one-page-menu-container">
              <ul className="menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/courses">Courses</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/pricing">Pricing </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/team">Teacher</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/projects">Gallery</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div id="cssmenu2" className="menu-one-page-menu-container">
              <ul id="menu-one-page-menu-12" className="menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="#home">
                    <span>+8 12 3456897</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="#howitwork">
                    <span>info@example.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`offcanvas-overly ${"active"}`}> </div>
        </>
      )}
    </>
  );
}

export default Main;
