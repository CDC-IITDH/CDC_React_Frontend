import React from 'react'
import { Link } from 'react-router-dom'

  const containerStyle = {
    backgroundColor: '#125875',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  };
  
function Scholarship() {
  
  return (
    <>
        <section className="cta-area pt-50 pb-50" style={containerStyle} >
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