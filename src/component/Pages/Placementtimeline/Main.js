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

import Placementinfo from "../Placementinfo/Main";
class Testimonials extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      hoveredLink: null ,
    };
  }

  // Method to handle mouse enter
  handleMouseEnter = (link) => {
    this.setState({ hoveredLink: link });
  };

  // Method to handle mouse leave
  handleMouseLeave = () => {
    this.setState({ hoveredLink: null });
  };
  render() 
    {
      const { hoveredLink } = this.state;
      const getLinkStyle = (link) => ({
        color: hoveredLink === link ? '#125875' : 'white', // Change color on hover
        marginBottom: '15px',
        textDecoration: 'none', // Optional: Removes underline from links
      });
    return (
      <>
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
            PLACEMENT PROCEDURE
          </div>
          <style>
            {`
            .vertical-timeline::before {
              background: rgb(18, 88, 117) !important; /* Change to your desired color */
            }
            .vertical-timeline{
              margin-bottom:40px
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
              }
              
            }
          //   onMouseEnter={() => this.handleMouseEnter('invitation')} // Handle mouse enter
          // onMouseLeave={this.handleMouseLeave}
              icon={<a
                href="https://cdc.iitdh.ac.in/portal/jnf" target="_blank" 
                style={{ background: "#ff7350", color: "white" }}
                onMouseEnter={() => this.handleMouseEnter('invitation')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}><FaEnvelope /></a>}
            >
              
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "white", marginBottom: "15px" }}
              >
                <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('invitation')}
          onMouseEnter={() => this.handleMouseEnter('invitation')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
                Invitation
                </a>
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "white" }}
              >
                <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('invitation')}
          onMouseEnter={() => this.handleMouseEnter('invitation')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
                Career Development Cell (CDC) sends invites to the companies
                with relevant information and links
                </a>
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
              icon={<a
                href="https://cdc.iitdh.ac.in/portal/jnf" target="_blank" 
                style={{ background: "#ff7350", color: "white" }}
                onMouseEnter={() => this.handleMouseEnter('JNF')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}><FaPaste /></a>}
            >
              <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('JNF')}
          onMouseEnter={() => this.handleMouseEnter('JNF')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "white", marginBottom: "15px" }}
              ><a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('JNF')}
          onMouseEnter={() => this.handleMouseEnter('JNF')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
                         Fill JNF
                        </a>
               
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "white" }}
              >
               <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('JNF')}
          onMouseEnter={() => this.handleMouseEnter('JNF')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
                Interested companies fill out the Job Notification Form (JNF)
                which is given on the Home page
                </a>
              </h4>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#ff7350", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #ff7350" }}
              iconStyle={{ background: "rgb(18, 88, 117)", color: "#fff" }}
              icon={<a
                href="https://cdc.iitdh.ac.in/portal/jnf"
                target="_blank"      
                style={{ background: "#ff7350", color: "white" }}
onMouseEnter={() => this.handleMouseEnter('RSP')} // Handle mouse enter
onMouseLeave={this.handleMouseLeave}                  
              ><FaFile /></a>}
            >
              <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('RSP')}
          onMouseEnter={() => this.handleMouseEnter('RSP')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "white", marginBottom: "15px" }}
              >
                <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('RSP')}
          onMouseEnter={() => this.handleMouseEnter('RSP')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
                {" "}
                Resume sharing & Pre Placement talk</a>
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "white" }}
              >
                <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('RSP')}
          onMouseEnter={() => this.handleMouseEnter('RSP')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
                The resumes of all interested and eligible students are made
                available to the companies who may then conduct pre-placement
                talks.
                </a>
              </h4>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#ff7350", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #ff7350" }}
              iconStyle={{ background: "rgb(18, 88, 117)", color: "#fff" }}
              icon={<a
                href="https://cdc.iitdh.ac.in/portal/jnf"
                target="_blank"      
                style={{ background: "#ff7350", color: "white" }}
onMouseEnter={() => this.handleMouseEnter('SS')} // Handle mouse enter
onMouseLeave={this.handleMouseLeave}                  
              ><FaList /></a>}
            >
              <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('SS')}
          onMouseEnter={() => this.handleMouseEnter('SS')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "white", marginBottom: "15px" }}
              >
                 <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('SS')}
          onMouseEnter={() => this.handleMouseEnter('SS')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
                Screening & Shortlisting</a>
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "white" }}
              >
                <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('SS')}
          onMouseEnter={() => this.handleMouseEnter('SS')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
                Online tests and telephonic interviews are conducted by the
                companies in order to shortlist the students.</a>
              </h4>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#ff7350", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #ff7350" }}
              iconStyle={{ background: "rgb(18, 88, 117)", color: "#fff" }}
              icon={ <a
                href="https://cdc.iitdh.ac.in/portal/jnf"
                target="_blank"      
                style={{ background: "#ff7350", color: "white" }}
onMouseEnter={() => this.handleMouseEnter('I')} // Handle mouse enter
onMouseLeave={this.handleMouseLeave}                  
              ><FaUsers /></a>}
            >
              <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('I')}
          onMouseEnter={() => this.handleMouseEnter('I')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "white", marginBottom: "15px" }}
              >
                <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('I')}
          onMouseEnter={() => this.handleMouseEnter('I')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        > Interviews</a>
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "white" }}
              >
                <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('I')}
          onMouseEnter={() => this.handleMouseEnter('I')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        > CDC provides the recruitment dates (start of the recruitment
                session) to the companies. Companies visit the campus on
                allotted dates and conduct interview of the shortlisted
                students.</a>
              </h4>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#ff7350", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #ff7350" }}
              iconStyle={{ background: "rgb(18, 88, 117)", color: "#fff" }}
              icon={ <a
                href="https://cdc.iitdh.ac.in/portal/jnf"
                target="_blank"      
                style={{ background: "#ff7350", color: "white" }}
onMouseEnter={() => this.handleMouseEnter('f')} // Handle mouse enter
onMouseLeave={this.handleMouseLeave}                  
              ><FaFlagCheckered /></a>}
            >
               <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('I')}
          onMouseEnter={() => this.handleMouseEnter('I')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "white", marginBottom: "15px" }}
              >
               <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('f')}
          onMouseEnter={() => this.handleMouseEnter('f')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        >  Finalizing</a>
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "white" }}
              >
                <a
                          href="https://cdc.iitdh.ac.in/portal/jnf"
                          target="_blank"      
                          style={getLinkStyle('f')}
          onMouseEnter={() => this.handleMouseEnter('f')} // Handle mouse enter
          onMouseLeave={this.handleMouseLeave}                  
                        > The Companies provide the final list of the selected students
                and CDC coordinates by signing off the offer letters.</a>
              </h4></a>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <Placementinfo />
        </section>
      </>
    );
  }
}

export default Testimonials;
