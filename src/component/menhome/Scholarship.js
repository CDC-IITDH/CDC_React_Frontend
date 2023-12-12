import React from 'react'
import { Link } from 'react-router-dom'

function Scholarship() {
  return (
    <>
        <section className="cta-area cta-bg pt-50 pb-50" style={{ backgroundColor: "gray" }} >
            <div className="container">
                <div className="row ">
                <div>
                    <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <h2>Why IIT Dharwad?</h2>
                    <p style={{textAlign:"justify"}}>
                    IIT Dharwad is a premier educational institution, focusing on the holistic development of each student. Our students are nurtured to be curious, hardworking and adaptive, right from the first semester. In addition to theoretical knowledge, we also impart hands on knowledge and industry relevant skills to our students, to enable them to thrive in any setting. Through organizing various events and participating in our plethora of club activities, our students are skilled in management, teamwork and logistics too. A lot of impetus is given to sports in our college, from where our students pick up important life skills like leadership, and team-spirit. Thus, be it research or management, rest assured that our students will be able to add value to your organization, in whatever role you may choose to hire them.
                    </p>
                    </div>
                </div>
                {/* <div className="col-lg-4"> */}
                    {/* <div className="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s" > */}
                    {/* <Link to="/about" className="btn ss-btn smoth-scroll">
                        Financial Aid <i className="fal fa-long-arrow-right" />
                    </Link> */}
                    
                    {/* </div> */}
                </div>
                <Link
                  className="btn ss-btn mr-15" 
                  style={{marginBottom:"20px"}}
                  data-animation="fadeInLeft"
                  data-delay=".4s"
                        >
                          Register For Placements
                        
                    </Link>
                    <Link
                    className="btn ss-btn mr-15"
                    style={{marginBottom:"20px"}}
                    data-animation="fadeInLeft"
                    data-delay=".4s"
                        >
                          Register For Internships
                    </Link>
                </div>
            {/* </div> */}
           
        </section>
    </>
  )
}

export default Scholarship