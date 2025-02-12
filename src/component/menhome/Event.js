import React from 'react'
import { Link } from 'react-router-dom'
import events from '../../data/events.json'
function Event() {

    const upcomingEvents = events
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  
  let sortedEvents;
  let isUpcoming = true;
  const images = require.context("../../assets/img/events/")
  if (upcomingEvents.length > 0) {
    // If there are upcoming events, take the first 3
    sortedEvents = upcomingEvents.slice(0, 3);
   
  } else {
    // If there are no upcoming events, take the top 3 most recent past events
    isUpcoming = false;
    sortedEvents = events
      .filter(event => new Date(event.date) <= new Date())
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort in descending order
      .slice(0, 3);
      
  }
  return (
    
    <>   
        <section className="event pt-120 pb-90 p-relative fix">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 p-relative">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated"
                    data-animation="fadeInDown"
                    data-delay=".4s">
                    <h5>
                        <i className="fal fa-graduation-cap" /> Our Events
                    </h5>
                    <h2>{isUpcoming ? 'Upcoming Events' : 'Past Events'}</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                {sortedEvents.map(event => {
                    const [day, month, year] = event.date.split(" ");
                return(
                <div className="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link to={`/single-event/${event.id}`}>
                          <img src={images(event.image)} alt="contact-bg-an-01" style={{minHeight:"233px", maxHeight: "233px"}}/>
                        </Link>
                    </div>
                    <div className="event-content" style={{minHeight:"250px"}}>
                        <div className="date" style={{fontSize:"10px"}}>
                        <strong>{day}</strong> {month} {year}
                        </div>
                        <h3 style={{height: '60px', overflow: 'hidden'}}>
                        <Link to={`/single-event/${event.id}`}>
                            {" "}
                            {event.title}
                        </Link>
                        </h3>
                        <p style={{height: '72px', overflow: 'hidden'}}>
                        {event.description.split(' ').slice(0, 11).join(' ')}
                        </p>
                        <div className="time" style={{position: 'absolute', bottom: '30px'}}>
                        {event.time} <i className="fal fa-long-arrow-right" />{" "}
                        <strong>{event.venue}</strong>
                        </div>
                    </div>
                    </div>
                </div>
                );
                })}
                </div>
                {/* <div className="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link to="/single-event">
                            <img src="assets/img/bg/evn-img-2.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="date">
                        <strong>20</strong> March, 2023
                        </div>
                        <h3>
                        <Link to="/single-event">
                            Digital Education Market Briefing: Minnesota 2023
                        </Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <div className="time">
                        3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                        <strong>United Kingdom</strong>
                        </div>
                    </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link to="/single-event">
                            <img src="assets/img/bg/evn-img-3.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="date">
                        <strong>22</strong> March, 2023
                        </div>
                        <h3>
                        <Link to="/single-event">
                            {" "}
                            Learning Network Webinars for Music Teachers
                        </Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <div className="time">
                        3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                        <strong>United Kingdom</strong>
                        </div>
                    </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link to="/single-event">
                        <img src="assets/img/bg/evn-img-4.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="date">
                        <strong>22</strong> March, 2023
                        </div>
                        <h3>
                        <Link to="/single-event">
                            {" "}
                            Next-Gen Higher Education Students Have Arrived?
                        </Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <div className="time">
                        3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                        <strong>United Kingdom</strong>
                        </div>
                    </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link to="/single-event">
                            <img src="assets/img/bg/evn-img-5.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="date">
                        <strong>24</strong> March, 2023
                        </div>
                        <h3>
                        <Link to="/single-event">
                            {" "}
                            Digital Art &amp; 3D Model – a future for film company
                        </Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <div className="time">
                        3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                        <strong>United Kingdom</strong>
                        </div>
                    </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link to="/single-event">
                            <img src="assets/img/bg/evn-img-6.jpg" alt="contact-bg-an-01" />
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="date">
                        <strong>30</strong> March, 2023
                        </div>
                        <h3>
                        <Link to="/single-event">
                            {" "}
                            Conscious Discipline Summer Institute
                        </Link>
                        </h3>
                        <p>
                        Seamlessly visualize quality ellectual capital without superior
                        collaboration and idea tically
                        </p>
                        <div className="time">
                        3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                        <strong>United Kingdom</strong>
                        </div>
                    </div>
                    </div>
                </div> */}
               
            </div>
            
        </section>
    </>
  )
}

export default Event