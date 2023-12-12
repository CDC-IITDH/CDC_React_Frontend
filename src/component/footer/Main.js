import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
        <footer className="footer-bg footer-p pt-90" style={{ backgroundColor: "#125875", backgroundImage: "url(assets/img/bg/footer-bg.png)" }} >
            <div className="footer-top pb-70">
                <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>About Us</h2>
                        </div>
                        <div className="f-contact"> {/* about cdc */}
                        <p>
                        CDC is a body of IIT Dharwad that supports students in shaping and managing their careers by building critical ingredients required for a student to be a complete professional.It is committed to assisting all IIT Dharwad students in achieving their career goal.
                        </p>
                        </div>
                        <div className="footer-social mt-10">
                            <a href="https://www.linkedin.com/company/cdciitdharwad/?originalSubdomain=in">
                                {/* <i className="fab fa-facebook-f" /> */}
                                <i className="fab fa-linkedin" />

                            </a>
                            <a href="https://www.instagram.com/cdc.iitdh/?hl=en">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>Our Links</h2>
                        </div>
                        <div className="footer-link">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about"> Academic Information</Link>
                            </li>
                            <li>
                                <Link to="/courses">Undergraduate</Link>
                            </li>
                            <li>
                                <Link to="/contact"> Faculty</Link>
                            </li>
                            <li>
                                <Link to="/blog">Academic Facilities </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>Latest Post</h2>
                        </div>
                        <div className="recent-blog-footer">
                        <ul>
                            <li>
                            <div className="thum">
                                {" "}
                                <img src="assets/img/blog/s-blogimg-01.png" alt="img" />
                            </div>
                            <div className="text">
                                {" "}
                                <Link to="/blog-details">
                                Nothing impossble to need hard work
                                </Link>
                                <span>7 March, 2020</span>
                            </div>
                            </li>
                            <li>
                            <div className="thum">
                                {" "}
                                <img src="assets/img/blog/s-blogimg-02.png" alt="img" />
                            </div>
                            <div className="text">
                                {" "}
                                <Link to="/blog-details">
                                Nothing impossble to need hard work
                                </Link>
                                <span>7 March, 2020</span>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>Contact Us</h2>
                        </div>
                        <div className="f-contact">
                        <ul>
                            <li>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                            <i className="icon fal fa-phone" />
                            <span>
                                {/* <Link to="tel:+14440008888">+1 (444) 000-8888</Link>
                                <br /> */}
                                <Link style={{  display: 'block' }}   to="tel:+91 836 2212 839">+91 836 2212 839</Link>
                            </span>
                            </div>
                            </li>
                            <li>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                            <i className="icon fal fa-envelope" />
                            <span >
                            <Link style={{  display: 'block' }} to="mailto:cdc@iitdh.ac.in">
                            cdc@iitdh.ac.in
                             </Link>
                             {/* <br />
                                <Link to="mailto:help@example.com">help@example.com</Link> */}
                            </span>
                            </div>
                            </li>
                            <li>
                            <div  >
                            <i className="icon fal fa-map-marker-check" />
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                            Indian Institute of Technology Dharwad
                            Karnataka, India - 580011.
                            </span>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <div className="copyright-wrap">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                    <div className="copy-text">
                        <Link to="/">
                            <img src="assets/img/logo/f_logo.png" alt="img" />
                        </Link>
                    </div>
                    </div>
                    <div className="col-lg-4 text-center"></div>
                    <div className="col-lg-4 text-right text-xl-right">
                        Copyright © Qeducato 2023 . All rights reserved.
                    </div>
                </div>
                </div>
            </div> */}
        </footer>
    </>
  )
}

export default Main