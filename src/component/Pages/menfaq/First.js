import React, { useState } from "react";
import { Link } from "react-router-dom";
import faqData from "../../../data/recruiterFAQs.json";
import faqImage from "../../../assets/img/features/Faq-Image.jpg";
function First() {
  const [video, setVideo] = useState();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderBranches = (branches) => {
    return Object.entries(branches).map(([degree, branchesList]) => (
      <div key={degree}>
        <h4>{degree}</h4>
        <ol>
          {branchesList.map((branch, index) => (
            <li key={index}>{branch}</li>
          ))}
        </ol>
      </div>
    ));
  };

  return (
    <>
      <section className="event event03 pt-150 pb-120 p-relative fix">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-5  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                // className="s-video-wrap2"
                style={{ display: "flex", alignItems: "flex-start" }}
                // style={{ backgroundImage: "url(assets/img/bg/video-img3.png)" }}
              >
                <div
                // className="s-video-content text-center"
                >
                  {/* <h6> */}
                  {/* <Link
                      to="#"
                      className="popup-video mb-50"
                      onClick={() => setVideo(true)}
                    > */}
                  <img src={faqImage} alt="circle_right" />
                  {/* </Link> */}
                  {/* </h6> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-7  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="faq-wrap pl-30 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="accordion" id="accordionExample">
                  {faqData.map((item, index) => (
                    <div className="card" key={index}>
                      <div className="card-header" id={item.id}>
                        <h2 className="mb-0">
                          <button
                            className={`faq-btn${
                              activeIndex === index ? "" : " collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            onClick={() => handleToggle(index)}
                          >
                            {item.question}
                          </button>
                        </h2>
                      </div>
                      <div
                        id={`collapse${index}`}
                        className={`collapse${
                          activeIndex === index ? " show" : ""
                        }`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          {typeof item.answer === "object"
                            ? renderBranches(item.answer)
                            : item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {video && (
        <>
          <div className="mfp-bg mfp-ready"></div>
          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
            tabindex="-1"
            style={{ overflow: "hidden" }}
          >
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                    onClick={() => setVideo(false)}
                  >
                    ×
                  </button>
                  <iframe
                    className="mfp-iframe"
                    src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default First;
