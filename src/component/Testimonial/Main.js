import React from 'react';
import Bredcom from "../Bredcom/Main";

import CssData from "./../../CustomCSS/TestimonialthreeCSS.json";

import directorImg from "./../../assets/img/director/Director.jpeg";
import deanApImg from "./../../assets/img/director/dean_ap.jpg";
import deanRndImg from "./../../assets/img/director/dean_rnd.jpeg";


const Testimonialnew = () => {

    const testimonials = [
        {
          id: 1,
          title: " Director's Message",
          quote:
            "Dear Esteemed HR Representatives, a warm welcome awaits you at the Indian Institute of Technology Dharwad (IITDh). It brings me immense joy to extend this invitation to your esteemed organizations for the placement of our talented students. Established in July 2016, IITDh has expanded significantly, offering a spectrum of programs from B.Tech to PhD across various disciplines. Presently situated in a transit campus sprawling over 135 acres at WALMI, equipped with 25 buildings, 11 hostels, laboratories, and more, IITDh is poised for growth in Chikkamalligawad village, allotted by the Karnataka Government for its permanent campus. Our library, boasting 5000 books and access to 8500 research journals, complements the academic vigor of our 900 students, hailing from 21 states with a commendable 20% representation of women. With a faculty of 70 members, each holding prestigious qualifications and significant research accolades, our institute has garnered impressive sponsored projects and publications. It would be an honor to have your presence on our campus, providing an opportunity for our exceptional students to showcase their aptitude and readiness to contribute to your esteemed organization. We assure you of the quality and readiness of our students and eagerly anticipate fostering a lasting and mutually beneficial relationship with your organization through our placement drive. We look forward to hosting you.",
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
          title: " Deans's Message",
          quote:
            "IIT Dharwad's Research and Development (R&D) division is actively cultivating a vibrant culture of innovation and exploration. Our efforts span various initiatives, including collaborating with funding agencies to secure sponsored projects, facilitating consultancy projects, and providing specialized courses tailored for industry professionals. To fortify the relationship between industry and academia, we organize Development of Industry and Academia Linkage (DIAL) days, fostering crucial connections. Despite a short duration, our dynamic faculty members have remarkably obtained numerous funded projects amounting to 6 crores, demonstrating our commitment to pioneering research. Moreover, our R&D unit actively engages in collaborations with esteemed universities and industries, both nationally and internationally, forging partnerships through signed MoUs that have already initiated collaborative ventures, marking the onset of fruitful collaborations.",
          authorName: "Prof. Rajesh Hegde",
          authorRole: "Dean of Research & Development, IIT Dharwad",
          imgSrc: deanRndImg,
        },
      ];

    let settings = {
        dots: true,
        infinite: true,
        arrows: false,
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
        <Bredcom title="Home" subtitle="Testimonials" />
        <div className="single-testimonial text-center" style={{ paddingTop: '150px', margin: '20px', display: 'flex', flexDirection: 'column', marginBottom: '100px' ,alignItems: 'center', color: 'black' }}>
            <div className="qt-img">
                <img
                    src={require("./../../assets/img/testimonial/qt-icon.png")}
                    alt=""
                />{" "}
                <span style={CssData.titleStyle}>
                    {testimonials[0].title}
                </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="testi-author" style={{ marginRight: '10px' }}>
                        <img src={directorImg} alt="img" style={CssData.imageStyles} />
                    </div>
                    <div className="ta-info" style={{ marginLeft: '10px', color: 'black', textAlign: 'center' }}>
                        <h5>{testimonials[0].authorName}</h5>
                        <span style={{ color: 'orange' }}>{testimonials[0].authorRole}</span>
                    </div>
                </div>
                <p style={{ fontWeight: '600', fontSize: '18px', letterSpacing: '1px', marginLeft: '40px', textAlign: 'center', marginTop: '20px', maxWidth: '70%' }}>
                    {testimonials[0].quote}
                </p>


            </div>
        </div>

    </>
  );
};

export default Testimonialnew;