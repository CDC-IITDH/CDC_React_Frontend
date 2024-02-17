import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiProbot } from "react-icons/si";
import {
  FaEnvelope,
  FaPaste,
  FaFile,
  FaList,
  FaUsers,
  FaFlagCheckered,
} from "react-icons/fa";
import Interninfo from "../Internshipinfo/Main";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      isHovered: false,
    };
  }

  // Method to handle mouse enter
  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  // Method to handle mouse leave
  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const linkStyle = {
      color: this.state.isHovered ? '#125875' : 'white', // Change color on hover
      marginBottom: '15px',
      textDecoration: 'none', // Optional: Removes underline from links
    };
    return (
      <section
        id="timeline"
        style={{
          paddingTop: "60px",
          marginLeft: "auto",
          backgroundColor: "rgb(239, 247, 255)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "rgb(18, 88, 117)",
            fontSize: "30px",
            fontFamily: "'Jost', sans-serif",
            marginBottom: "40px",
          }}
        >
          INTERNSHIP PROCEDURE
        </div>
        <style>
          {`
            .vertical-timeline::before {
              background: rgb(18, 88, 117) !important; /* Change to your desired color */
            }
          `}
        </style>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ff7350", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid #ff7350" }}
            iconStyle={{
              background: "rgb(18, 88, 117)",
              color: "#fff",
              border: "none",
            }}
            icon={<FaEnvelope />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "white", marginBottom: "15px" }}
            >
              Invitation
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "white" }}
            >
              Career Development Cell (CDC) sends invites to the companies with
              relevant information and links
            </h4>
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
            contentStyle={{ background: "#ff7350", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #ff7350" }}
            iconStyle={{ background: "rgb(18, 88, 117)", color: "#fff" }}
            icon={<FaPaste />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "white", marginBottom: "15px" }}
            > <a
                          href="https://cdc.iitdh.ac.in/portal/inf"
                          target="_blank"      
                          style={linkStyle}
          onMouseEnter={this.handleMouseEnter} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
                         Fill INF
                        </a>
              
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "white" }}
            >
              Interested companies can fill out the Internship Notification Form
              (INF) which is given on the Home page
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#ff7350", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #ff7350" }}
            iconStyle={{ background: "rgb(18, 88, 117)", color: "#fff" }}
            icon={<FaFile />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "white", marginBottom: "15px" }}
            >
              Resume sharing & Pre Placement talk
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "white" }}
            >
              The resumes of all interested and eligible students are made
              available to the companies who may then conduct pre-placement
              talks.
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#ff7350", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #ff7350" }}
            iconStyle={{ background: "rgb(18, 88, 117)", color: "#fff" }}
            icon={<FaList />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "white", marginBottom: "15px" }}
            >
              Screening & Shortlisting
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "white" }}
            >
              Online tests and telephonic interviews are conducted by the
              companies in order to shortlist the students.
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#ff7350", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #ff7350" }}
            iconStyle={{ background: "rgb(18, 88, 117)", color: "#fff" }}
            icon={<FaUsers />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "white", marginBottom: "15px" }}
            >
              Interviews
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "white" }}
            >
              CDC provides the recruitment dates (start of the recruitment
              session) to the companies. Companies visit the campus on allotted
              dates and conduct interview of the shortlisted students.
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#ff7350", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #ff7350" }}
            iconStyle={{ background: "rgb(18, 88, 117)", color: "#fff" }}
            icon={<FaFlagCheckered />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "white", marginBottom: "15px" }}
            >
              Finalizing
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "white" }}
            >
              The Companies provide the final list of the selected students and
              CDC coordinates by signing off the offer letters.
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Interninfo />
      </section>
    );
  }
}

export default Testimonials;
