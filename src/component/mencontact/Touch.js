import React from 'react'

function Touch() {
  return (
    <>
        <section id="services" className="services-area pt-120 pb-90 fix">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5>
                        <i className="fal fa-graduation-cap" /> Contact Info
                    </h5>
                    <h2>Get In Touch</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="services-box text-center" style = {{ minHeight: "400px" }}>
                    <div className="services-icon">
                        <img src="assets/img/bg/contact-icon01.png" alt="image" />
                    </div>
                    <div className="services-content2">
                        <h5>
                        <a href="tel:+918362212839">+91 836 2212 839</a>
                        </h5>
                        <p>Phone Support</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="services-box text-center active" style = {{ minHeight: "400px"}}>
                    <div className="services-icon">
                        <img src="assets/img/bg/contact-icon02.png" alt="image" />
                    </div>
                    <div className="services-content2">
                        <h5>
                        <a href="mailto:jobs@webtrueexample.com">
                            cdc@iitdh.ac.in
                        </a>
                        </h5>
                        <p>Email Address</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="services-box text-center" style = {{ minHeight: "400px" }}>
                    <div className="services-icon">
                        <img src="assets/img/bg/contact-icon03.png" alt="image" />
                    </div>
                    <div className="services-content2">
                        <h6>Indian Institute of Technology Dharwad, Chikka Malligwad, Karnataka 580007</h6>
                        <p>Address</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Touch