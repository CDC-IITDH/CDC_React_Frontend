import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <>
       <section className="about-area about-p pt-120 pb-120 p-relative fix" style={{ background: "#eff7ff" }} >

            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                    <img src="assets/img/features/about_img_02.png" alt="img" />
                    <div className="about-text second-about">
                        <span>
                    <sub>Established</sub>
                        </span>
                        <p>In 2016</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                    <div className="about-title second-title pb-25">
                        <h5>
                        <i className="fal fa-graduation-cap" /> About IIT Dharwad
                        </h5>
                        <h2>A Few Words About IIT Dharwad</h2>
                    </div>
                    <p className="txt-clr">
                        {/* Our community is being called to reimagine the future. As the only
                        university where a renowned design school comes together with
                        premier colleges, we are making learning more relevant and
                        transformational. */}
                        Established in 2016 as an autonomous institute of national importance by the Ministry of Human 
                        Resource Development,GoI, Indian Institute of Technology Dharwad (IIT Dharwad) aims at producing world class engineers 
                        who are capable of establishing themselves in the higher echelons of any field they venture into.
                    </p>
                    <p>
                        {/* We are proud to offer top ranige in employment services such and
                        asser payroll and benefits administrato managemen and asistance with
                        global business range ployment employer readings from religious
                        texts or literature are also commonly inc compliance. */}
                        The institute offers three UG programs – B.Tech. in Computer Science and Engineering, Electrical Engineering and Mechanical Engineering. Ph.D Programs are offered in the areas of Electrical Engineering, Mechanical Engineering, Mathematics, Computer Science, Physics, Humanities and Social Sciences, Biosciences Bioengineering and Chemistry.

                    </p>
                    {/* <p>
                    The institute aims to make education an innovative and enriching experience through a unique blend of academic, sports and extra-curricular programs delivered within a student-centric culture to enable the younger generation emerge as future leaders.
                    </p>
                    <p>
                    The overall academic environment in the institution is highly conducive for achieving academic excellence and for developing analytical abilities, ethics and integrity.
                    </p>
                    <p>
                    Apart from academic excellence, the institute lays emphasis on research temperament, entrepreneurship and motivates its students to recognize their true potential without the fear of failure.

                    </p> */}
                    <div className="about-content2">
                        <div className="row">
                        <div className="col-md-12">
                            <ul className="green2">
                            <li>
                                {/* <div className="abcontent">
                                <div className="ano">
                                    <span>01</span>
                                </div>{" "}
                                <div className="text">
                                    <h3>Doctoral Degrees</h3>{" "}
                                    <p>
                                    consectetur adipiscing elit sed do eiusmod tem incid
                                    idunt.
                                    </p>
                                </div>
                                </div> */}
                            </li>
                            <li>
                                {/* <div className="abcontent">
                                <div className="ano">
                                    <span>02</span>
                                </div>{" "}
                                <div className="text">
                                    <h3>Global Students</h3>{" "}
                                    <p>
                                    consectetur adipiscing elit sed do eiusmod tem incid
                                    idunt.
                                    </p>
                                </div>
                                </div> */}
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="slider-btn mt-20">
                        <Link to="/about" className="btn ss-btn smoth-scroll">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
       </section>
       
    </>
  )
}

export default About