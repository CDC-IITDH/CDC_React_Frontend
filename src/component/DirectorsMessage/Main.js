import React from "react";
import Bredcom from "../Bredcom/Main";

import CssData from "../../CustomCSS/TestimonialthreeCSS.json";

import directorImg from "./../../assets/img/director/Director.jpeg";
import deanApImg from "./../../assets/img/director/dean_ap.jpg";
// import deanRndImg from "./../../assets/img/director/dean_rnd.jpeg";
import FICImg from "./../../assets/img/director/Satya_Priya_Image.jpeg";

const Testimonialnew = () => {
  const testimonials = [
    {
      id: 1,
      title: " Director's Message",
      quote:
        "Dear Esteemed HR Representatives, a warm welcome awaits you at the Indian Institute of Technology Dharwad (IITDh). It brings me immense joy to extend this invitation to your esteemed organizations for the placement of our talented students. Established in July 2016, IITDh has expanded significantly, offering a spectrum of programs from B.Tech to PhD across various disciplines. Presently situated in Permanent Campus of IIT Dharwad sprawling over 470 acres. Our library, boasting 5000 books and access to 8500 research journals, complements the academic vigor of our 1000 students, hailing from 21 states with a commendable 20% representation of women. With a faculty of 90 members, each holding prestigious qualifications and significant research accolades, our institute has garnered impressive sponsored projects and publications. It would be an honor to have your presence on our campus, providing an opportunity for our exceptional students to showcase their aptitude and readiness to contribute to your esteemed organization. We assure you of the quality and readiness of our students and eagerly anticipate fostering a lasting and mutually beneficial relationship with your organization through our placement drive. We look forward to hosting you.",
      authorName: "Venkappayya R Desai",
      authorRole: "Director, IIT Dharwad",
      imgSrc: directorImg,
    },
    {
      id: 2,
      title: " Dean's Message",
      quote:
        "Dear Esteemed Guests, it brings me immense pleasure to extend a heartfelt invitation on behalf of the entire IIT Dharwad community. We cordially invite you to participate in our placement drive for final year students and internships for pre-final year students. At IIT Dharwad, our curriculum is meticulously crafted to offer a hands-on learning experience, focusing on imparting practical engineering skills essential for real-world contributions. Our courses integrate 'Course Projects' wherein students conceive and execute projects under the guidance of our esteemed faculty. With a spirit of collaboration, our vibrant and dedicated students actively contribute to their peers' learning through group projects, serving as teaching assistants, and even authoring manuals for courses or enhancing existing ones.As a growing institution, our students play an active role in shaping their academic environment, forming committees to enhance both their academic productivity and overall college experience. Each student brings their unique strengths to the table, collectively addressing and uplifting one another's weaknesses, thereby fostering an environment of continual growth.We eagerly anticipate your involvement in our placement sessions for final year students and internships for pre-final year students. We believe your visit will mark the beginning of a promising and enduring relationship between our esteemed Institute and your organization. Here's to the days ahead filled with collaboration and mutual growth.",
      authorName: "Prof. Narayan S Punekar",
      authorRole: "Dean of Academic Programmes, IIT Dharwad",
      imgSrc: deanApImg,
    },
    {
      id: 3,
      title: "Faculty In Charge's Message",
      quote:
        "It gives me great pleasure to invite you to visit Indian Institute of Technology, dhArwAD for the placement and internship season 2024-2025. We are confident that our students will deliver the things in real time environments and surpass all expectations when it comes to fulfilling organizational objectives. I look forward to continuing a fruitful relationship.",
      authorName: "Prof. Satyapriya Gupta",
      authorRole: "Dept. of Mechanical, Materials and Aerospace Engineering",
      imgSrc: FICImg,
    },
  ];

  return (
    <>
      <Bredcom title="Home" subtitle="Director's Message" />
      {testimonials.map((testimonial, index) => (
        <div
          className="single-testimonial text-center"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "black",
            backgroundColor:
              index % 2 === 0 ? "rgba(128, 128, 128, 0.2)" : "rgb(3, 46, 63)",
            padding: "40px",
            paddingTop: "80px",
            paddingBottom: index == testimonials.length - 1 ? "100px" : "60px",
          }}
        >
          <div className="qt-img">
            <img
              src={require("./../../assets/img/testimonial/qt-icon.png")}
              alt=""
            />{" "}
            <span style={{ color: index % 2 === 0 ? "#000" : "#c3ccdb" }}>
              <span style={CssData.titleStyle}>{testimonial.title}</span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="testi-author" style={{ marginRight: "10px" }}>
                <img
                  src={testimonial.imgSrc}
                  alt="img"
                  style={CssData.imageStyles}
                />
              </div>
              <div
                className="ta-info"
                style={{
                  marginLeft: "10px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                <h5 style={{ color: index % 2 === 0 ? "#000" : "#c3ccdb" }}>
                  {testimonial.authorName}
                </h5>
                <span style={{ color: index % 2 === 0 ? "#000" : "#c3ccdb" }}>
                  {testimonial.authorRole}
                </span>
              </div>
            </div>
            <p
              className="testi-quote"
              style={{
                textAlign: "justify",
                letterSpacing: "1px",
                marginTop: "20px",
                maxWidth: "90%",
                color: index % 2 === 0 ? "#000" : "#c3ccdb",
              }}
            >
              {testimonial.quote}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Testimonialnew;
