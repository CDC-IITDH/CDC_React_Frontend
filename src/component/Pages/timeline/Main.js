import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiProbot } from 'react-icons/si';
import { FaEnvelope, FaPaste, FaFile, FaList, FaUsers, FaFlagCheckered } from 'react-icons/fa';
import Interninfo from "../Internshipinfo/Main";

class Testimonials extends Component {
  render() {

    return (
      <section id="timeline" style={{paddingTop : '60px', marginLeft : 'auto',backgroundColor:"rgb(239, 247, 255)" }}>
     
        <div style={{ textAlign : 'center', color: 'rgb(18, 88, 117)', fontSize : '30px',fontFamily:"'Jost', sans-serif", marginBottom: '40px'}}>INTERNSHIP PROCEDURE</div> 
        <style>
          {`
            .vertical-timeline::before {
              background: rgb(18, 88, 117) !important; /* Change to your desired color */
            }
          `}
        </style>
      
     <VerticalTimeline >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#ff7350", color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid #ff7350' }}
    iconStyle={{ background: "rgb(18, 88, 117)", color: '#fff' ,border:"none" }}
    icon={<FaEnvelope />}
  > 
    <h3 className="vertical-timeline-element-title" style={{color:"white"}}>Inviting Companies</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{color:"white"}}>Career Development Cell (CDC) sends invites to the companies with relevant information and links</h4>
    
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: "#000524", color: '#fff' }}
    icon={<SiProbot />}
  >
    <h3 className="vertical-timeline-element-title">Mid-Evaluation Submission</h3>
    <h4 className="vertical-timeline-element-subtitle">14th October</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: "#000524", color: '#fff' }}
    icon={<SiProbot />}
  >
    <h3 className="vertical-timeline-element-title">Mid-Evaluation Submission Feedback</h3>
    <h4 className="vertical-timeline-element-subtitle">16th October</h4>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#ff7350", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #ff7350' }}
    iconStyle={{ background: "rgb(18, 88, 117)", color: '#fff' }}
     icon={<FaPaste />}
  >
    <h3 className="vertical-timeline-element-title"  style={{color:"white"}}>Fill INF</h3>
    <h4 className="vertical-timeline-element-subtitle"  style={{color:"white"}}>Interested companies fill out the Internship Notification Form (INF) which is given on the CDC website</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: "#ff7350", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #ff7350' }}
    iconStyle={{ background: "rgb(18, 88, 117)", color: '#fff' }}
    icon={<FaFile />}
  >
    <h3 className="vertical-timeline-element-title"  style={{color:"white"}}>Resumes</h3>
    <h4 className="vertical-timeline-element-subtitle"  style={{color:"white"}}>The resumes of all interested and eligible students are made available to the interested companies and they further may conduct pre-placement talks at the institute</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: "#ff7350", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #ff7350' }}
    iconStyle={{ background: "rgb(18, 88, 117)", color: '#fff' }}
    icon={<FaList />}
  >
    <h3 className="vertical-timeline-element-title"  style={{color:"white"}}>Screening & Shortlisting</h3>
    <h4 className="vertical-timeline-element-subtitle"  style={{color:"white"}}>Online tests and telephonic interviews are conducted by the companies in order to shortlist the students.</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: "#ff7350", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #ff7350' }}
    iconStyle={{ background: "rgb(18, 88, 117)", color: '#fff' }}
    icon={<FaUsers />}
  >
    <h3 className="vertical-timeline-element-title"  style={{color:"white"}}>Interviews</h3>
    <h4 className="vertical-timeline-element-subtitle"  style={{color:"white"}}>CDC provides the companies with recruitment dates (start of the recruitment session). Companies visit the campus on allotted dates and conducts the interview of the shortlisted students.</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: "#ff7350", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #ff7350' }}
    iconStyle={{ background: "rgb(18, 88, 117)", color: '#fff' }}
     icon={<FaFlagCheckered />}
  >
    <h3 className="vertical-timeline-element-title"  style={{color:"white"}}>Finalizing</h3>
    <h4 className="vertical-timeline-element-subtitle"  style={{color:"white"}}>Companies provides the final list of the selected students and CDC coordinates by signing off the offer letters.</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
 <Interninfo/>
</section>

    );
  }
}

export default Testimonials;
