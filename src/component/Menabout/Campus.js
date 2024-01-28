import React from 'react'
import image31 from "./../../assets/img/gallery/Academic_Page_banner.jpg";
import image32 from "../../assets/img/gallery/Gallery-32.jpg";
function Campus() {
  return (
    <>
        <section className="steps-area2 p-relative fix" style={{ backgroundColor:"#032e3f" }} >
            <div className="animations-02">
                <img src="assets/img/bg/an-img-10.png" alt="an-img-01" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="step-box step-box2 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="dnumber">
                        {/* <div className="date-box"> */}
                            {/* <img src="assets/img/icon/fea-icon01.png" alt="icon" /> */}
            
                           
                        {/* </div> */}
                    </div>
                    <div className="text">
                        <h2>Why IIT Dharwad?</h2>
                        <p>
                        IIT Dharwad is a premier educational institution, focusing on the holistic development of each student. Our students are nurtured to be curious, hardworking and adaptive, right from the first semester. In addition to theoretical knowledge, we also impart hands on knowledge and industry relevant skills to our students, to enable them to thrive in any setting. Through organizing various events and participating in our plethora of club activities, our students are skilled in management, teamwork and logistics too. A lot of impetus is given to sports in our college, from where our students pick up important life skills like leadership, and team-spirit. Thus, be it research or management, rest assured that our students will be able to add value to your organization, in whatever role you may choose to hire them.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="step-img2 wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <img src={image31} style={{width: '100%',
                            objectFit: 'cover',
                            objectPosition:"center" // This makes the image cover the area, zooming in/out as neede
                            }} alt="class image" /> {/*added image to block 1*/}
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="steps-area2 p-relative fix" style={{ backgroundColor: "#125875" }} >
            <div className="container">           
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="step-img3 wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <img src={image32} style={{    // Ensure the image takes the full width of its container
                            
                            objectFit: 'contain',
                            objectPosition: 'center', // This makes the image cover the area, zooming in/out as neede
                            }} alt="class image" /> {/*added image to block 2*/}
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="step-box step-box3 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="dnumber">
                        {/* <div className="date-box"> */}
                        {/* <img src="assets/img/icon/fea-icon03.png" alt="icon" /> */}
                       
                        {/* </div> */}
                    </div>
                    <div className="text">
                        <h2>About CDC</h2>
                        <p>
                        CDC is a body of IIT Dharwad that supports students in shaping and managing their careers by building critical ingredients required for a student to be a complete professional.It is committed to assisting all IIT Dharwad students in achieving their career goals. To achieve the same, it organizes events like pre-placement training programs and various talk series to facilitate the Industry Institute Interface, to name a few.

The institute aims to make education an innovative It is also responsible for facilitating campus internships and placements for the students of IIT Dharwad. It further helps them explore opportunities for higher education. The CDC has successfully concluded the placement and internship session for the 2020, 2021 and 2022 batches respectively. Among 105 students who are qualified and appeared for the placements (in the class of 2022), 92 received placement offers. The CDC is now actively working on and is committed to having another successful year.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
        </section>
    </>
  )
}

export default Campus