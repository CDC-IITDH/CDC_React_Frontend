import React from "react";
import Bredcom from "../Bredcom/Main";
import Brand from "../menhomethree/Brand";
import Touch from "../mencontact/Touch";
import Map from "../mencontact/Map";
import Form from "../mencontact/Form";
import { Link } from "react-router-dom";

import facultyInChargeImage1 from "../../assets/img/team/Satya_Priya_Image.jpeg";
import facultyInChargeImage2 from "../../assets/img/team/ankit_v_k.JPG";

import teamMemberImage1 from "../../assets/img/team/srihari.jpeg";
import teamMemberImage2 from "../../assets/img/team/agrim.jpeg";
import teamMemberImage3 from "../../assets/img/team/varun.jpg";
import placementExecutiveImage from "../../assets/img/team/Sameer_Joshi_Image.jpg";
import TPO_Image from "../../assets/img/team/Jayanti_m_b.jpg";
import DefaultImage from "../../assets/img/team/default-avatar-profile.jpg";

function Main() {
  const facultyMembers = [
    {
      name: "Prof. Satyapriya Gupta",
      role: "Assistant Professor",
      dept: "Dept. of Mechanical, Materials and Aerospace Engineering",
      image: facultyInChargeImage1,
      phone: "+91 88268 24591",
      mail: "cdcfic@iitdh.ac.in",
      position: "Faculty In Charge",
    },
    {
      name: "Prof. Aniket Vasantrao Kataware",
      role: "Assistant Professor",
      dept: "Dept. of Civil & Infrastructure Engineering",
      image: facultyInChargeImage2,
      phone: "",
      mail: "aniket.kataware@iitdh.ac.in",
      position: "Faculty In Charge",
    },
  ];

  const tpo = [
    {
      name: "Jayanti M Belur",
      role: "Training & Placement Officer",
      dept: "",
      image: TPO_Image,
      phone: "+91 63625 42567",
      mail: "jayantibelur@iitdh.ac.in",
      tel: "+91 63635 42567",
      Email: "tpo@iitdh.ac.in",
      position: "Training & Placement Officer",
    },
  ];

  const placement_Executive = [
    {
      name: "Sameer Joshi",
      role: "Placement Executive",
      dept: "",
      image: placementExecutiveImage,
      phone: "+91 85533 16439",
      mail: "sameerjoshi@iitdh.ac.in",
      position: "Placement Executive",
    },
  ];
  const teamMembers = [
    {
      name: "Agrim Jain",
      role: "",
      image: teamMemberImage2,
      phone: "+91 95288 76421",
      mail: "210010003@iitdh.ac.in",
      linkedin: "https://www.linkedin.com/in/agrim-jain-6b9356234/",
      instagram: "https://www.instagram.com/agrimjain_26/",
    },
    {
      name: "Srihari K G",
      role: "",
      image: teamMemberImage1,
      phone: "+91 99022 60373",
      mail: "210030035@iitdh.ac.in",
      linkedin: "https://www.linkedin.com/in/srihari-k-g-91931a1ab/",
      instagram: "https://www.instagram.com/srihari_k_g_2003/",
    },
  ];
  return (
    <>
      <Bredcom title="Home" subtitle="Contact Us" />
      <Touch />
      <div className="container">
        <div className="col">
          <div className="row">
            {facultyMembers.map((member, index) => (
              <div key={index} className="col-md-6 col-12">
                <div
                  className="single-team mb-40"
                  style={{ minHeight: "350px" }}
                >
                  <div>
                    <h3 className="text-center">
                      <b>{member.position}</b>
                    </h3>
                  </div>
                  <div className="team-thumb">
                    <div className="brd">
                      <Link to="#">
                        {" "}
                        <img src={member.image} alt="img" />
                      </Link>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <Link to="#">{member.name}</Link>
                    </h4>
                    <p>{member.role}</p>
                    <p>{member.dept}</p>
                    <div className="team-social">
                      <ul>
                        <li>
                          <Link to={`mailto:${member.mail}`}>
                            <i className="fa fa-envelope" />
                          </Link>
                        </li>
                        <li>
                          <Link to={`tel:${member.phone}`}>
                            <i className="fa fa-phone" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* tpo */}
        <div className="col">
          <div className="row justify-content-center">
            {tpo.map((member, index) => (
              <div key={index} className="col-md-6 col-12">
                <div
                  className="single-team mb-40"
                  style={{ minHeight: "350px" }}
                >
                  <div>
                    <h3 className="text-center">
                      <b>{member.position}</b>
                    </h3>
                  </div>
                  <div className="team-thumb">
                    <div className="brd">
                      <Link to="#">
                        {" "}
                        <img src={member.image} alt="img" />
                      </Link>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <Link to="#">{member.name}</Link>
                    </h4>
                    <p>{member.role}</p>
                    <p>{member.dept}</p>
                    <p>{member.tel}</p>
                    <p>{member.Email}</p>
                    <div className="team-social">
                      <ul>
                        <li>
                          <Link to={`mailto:${member.mail}`}>
                            <i className="fa fa-envelope" />
                          </Link>
                        </li>
                        <li>
                          <Link to={`tel:${member.phone}`}>
                            <i className="fa fa-phone" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* placement_Executive */}
        <div className="col">
          <div className="row justify-content-center">
            {placement_Executive.map((member, index) => (
              <div key={index} className="col-md-6 col-12">
                <div
                  className="single-team mb-40"
                  style={{ minHeight: "350px" }}
                >
                  <div>
                    <h3 className="text-center">
                      <b>{member.position}</b>
                    </h3>
                  </div>
                  <div className="team-thumb">
                    <div className="brd">
                      <Link to="#">
                        {" "}
                        <img src={member.image} alt="img" />
                      </Link>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <Link to="#">{member.name}</Link>
                    </h4>
                    <p>{member.role}</p>
                    <p>{member.dept}</p>
                    <div className="team-social">
                      <ul>
                        <li>
                          <Link to={`mailto:${member.mail}`}>
                            <i className="fa fa-envelope" />
                          </Link>
                        </li>
                        <li>
                          <Link to={`tel:${member.phone}`}>
                            <i className="fa fa-phone" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CDC Student Heads */}
        <div className="col">
          <div
            className="d-flex justify-content-center"
            style={{ paddingBottom: "30px", paddingTop: "10px" }}
          >
            <h2>CDC Student Heads</h2>
          </div>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-xl-6 col-md-6">
                <div
                  className="single-team mb-40"
                  style={{ minHeight: "350px" }}
                >
                  <div className="team-thumb">
                    <div className="brd">
                      <Link to="#">
                        {" "}
                        <img src={member.image} alt="img" />
                      </Link>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <Link to="#">{member.name}</Link>
                    </h4>
                    <p>{member.role}</p>
                    <div className="team-social">
                      <ul>
                        <li>
                          <Link to={member.linkedin}>
                            <i className="fab fa-linkedin" />
                          </Link>
                        </li>
                        <li>
                          <Link to={member.instagram}>
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to={`tel:${member.phone}`}>
                            <i className="fa fa-phone" />
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to={`mailto:${member.mail}`}>
                            <i className="fa fa-envelope" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Link
          to="/team"
          className="btn ss-btn mr-15"
          style={{ marginBottom: "20px" }}
          data-animation="fadeInLeft"
          data-delay=".4s"
        >
          Our Team
        </Link>
      </div>
      <Map />
    </>
  );
}

export default Main;
