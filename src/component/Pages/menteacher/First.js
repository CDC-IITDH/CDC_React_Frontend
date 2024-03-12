import React from "react";
import { Link } from "react-router-dom";

import defaultProfileImage from "../../../assets/img/team/default-avatar-profile.jpg";
import facultyInChargeImage from "../../../assets/img/team/Satya_Priya_Image.jpeg";

import facultyAdvisorsImage1 from "../../../assets/img/team/Vandana_Bharti_Image.jpeg";
import facultyAdvisorsImage2 from "../../../assets/img/team/Sairam_Boggavarapu_Image.jpeg";
import facultyAdvisorsImage3 from "../../../assets/img/team/Naveen_MB_Image.jpeg";
import facultyAdvisorsImage4 from "../../../assets/img/team/Dhriti_Sundar_Ghosh_Image.jpeg";
import facultyAdvisorsImage5 from "../../../assets/img/team/Suvamay_Jana_Image.jpeg";
import facultyAdvisorsImage6 from "../../../assets/img/team/Ramesh_Nayaka_Image.jpeg";

import teamMemberImage1 from "../../../assets/img/team/Aryan_Photo_Square - Trimukhe Aryan Dhananjay.jpg";
import teamMemberImage2 from "../../../assets/img/team/InShot_20220905_215808159 - Pasumarthi Dharani Samsritha.jpg";
import teamMemberImage3 from "../../../assets/img/team/081AE1D4-053F-4E3C-A68C-D98450DD9172 - Kamtekar Varad Mahesh -2.jpg";
import teamMemberImage4 from "../../../assets/img/team/rahul-raj - Rahul Raj.jpg";

function First() {
  const facultyInCharge = [
    {
      name: "Prof. Satyapriya Gupta",
      role: "Assistant Professor",
      dept: "Dept. of Mechanical, Materials and Aerospace Engineering",
      image: facultyInChargeImage,
      phone: "+91 88268 24591",
      mail: "cdcfic@iitdh.ac.in",
    },
  ];

  const placementExecutive = [];
  {
    /*const placementExecutive = [
      {/*  { name: "Priyanka Naga", role: "", image: placementExecutiveImage, phone: "+91 82178 35130", mail: "priyanka.naga@iitdh.ac.in" ,linkedin: "https://www.linkedin.com/in/priyanka-n-a30813103/", instagram: "https://instagram.com/i_priyankanaga?igshid=MzNlNGNkZWQ4Mg=="}
    ] */
  }

  const facultyAdvisors = [
    {
      name: "Dr. Vandana Bharti",
      role: "Assistant Professor",
      dept: "Dept. of Computer Science and Engineering",
      image: facultyAdvisorsImage1,
      mail: "vandana@iitdh.ac.in",
    },
    {
      name: "Dr. Sairam Boggavarapu",
      role: "Assistant Professor",
      dept: "Dept. of EECE",
      image: facultyAdvisorsImage2,
      mail: "sairam@iitdh.ac.in",
    },
    {
      name: "Dr. Naveen MB",
      role: "Assistant Professor",
      dept: "Dept. of EECE",
      image: facultyAdvisorsImage3,
      mail: "naveenmb@iitdh.ac.in",
    },
    {
      name: "Dr. Dhriti Sundar Ghosh",
      role: "Assistant Professor",
      dept: "Dept. of Physics",
      image: facultyAdvisorsImage4,
      mail: "dhriti.ghost@iitdh.ac.in",
    },
    {
      name: "Dr. Suvamay Jana",
      role: "Assistant Professor",
      dept: "Dept. of Chemical Engineering",
      image: facultyAdvisorsImage5,
      mail: "suvamay@iitdh.ac.in",
    },
    {
      name: "Dr. Ramesh Nayaka",
      role: "Assistant Professor",
      dept: "Dept. of Civil and Infrastructure Engineering",
      image: facultyAdvisorsImage6,
      mail: "ramesh.nayaka@iitdh.ac.in",
    },
  ];

  const teamMembers = [
    {
      name: "Aryan Trimukhe",
      role: "",
      image: teamMemberImage1,
      phone: "+91 78754 66103",
      mail: "200010053@iitdh.ac.in",
      linkedin: "https://www.linkedin.com/in/aryan-trimukhe-397436200/",
      instagram: "https://www.instagram.com/aryan_trep",
    },
    {
      name: "Dharani Samsritha",
      role: "",
      image: teamMemberImage2,
      phone: "+91 70367 30747",
      mail: "200030039@iitdh.ac.in",
      linkedin: "https://www.linkedin.com/in/dharani-samsritha/",
      instagram:
        "https://www.instagram.com/dharani_samsritha?igsh=MXZyNDdvMmgwdDE3eA==",
    },
    {
      name: "Varad Kamtekar",
      role: "",
      image: teamMemberImage3,
      phone: "+91 91674 71212",
      mail: "200030025@iitdh.ac.in",
      linkedin: "https://www.linkedin.com/in/varad-kamtekar-7821a8202/",
      instagram: "https://www.instagram.com/varad_mk",
    },
    {
      name: "Rahul Raj",
      role: "",
      image: teamMemberImage4,
      phone: "+91 89059 36141",
      mail: "200010044@iitdh.ac.in",
      linkedin: "https://www.linkedin.com/in/rahul-raj-a97a7a1bb/",
      instagram: "https://www.instagram.com/raraj9042/",
    },
  ];

  const teams = [
    [
      "Sahitya Chinta",
      "Sankalp Nagaonkar",
      "Kavali Satyavani",
      "Rayi Prasanth Kumar",
      "Suhas Reddy",
      "Nandini D",
      "Siddhant Kumar",
      "Priyanshu Mishra",
      "Rahul A",
      "Aditya",
    ],
    [
      "Murakonda Venkata Karthik",
      "SriRam Mudragada",
      "Kavali Satyavani",
      "Prajwal Biradar",
      "Jaya Surya Putti",
      "R Eshwar",
      "Karthik K",
      "Nitin Vangipuram",
    ],
    [
      "Agrim Jain",
      "Pratham More",
      "Varun Limaye",
      "Srihari K G",
      "Sunay Patil",
      "Shreya Sharma",
      "Jatin Lather",
      "Abhiram K",
      "Aditya Kumar Singh",
      "Ansh Vivek",
      "Aryan Gulhane",
      "Kushal Mohta",
      "Shubh Agarwal",
      "Swapnesh Sinha",
      "Tejal Ladage",
      "Vivek Pillai",
    ],
  ];

  const teamNames = ["Outreach Team", "Technical Team", "Core Team"];

  return (
    <>
      <section
        className="team-area fix p-relative pt-150 pb-80"
        style={{ background: "#f7f9ff" }}
      >
        <div className="container">
          <div className="col">
            <div className="col">
              <div
                className="d-flex justify-content-center"
                style={{ paddingBottom: "30px", paddingTop: "10px" }}
              >
                <h2>Faculty In Charge</h2>
              </div>
              <div className="row d-flex justify-content-center">
                {facultyInCharge.map((member, index) => (
                  <div key={index} className="col-xl-3 col-md-6">
                    <div className="single-team mb-40">
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
            {placementExecutive.length > 0 && (
              <div className="col">
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingBottom: "30px", paddingTop: "10px" }}
                >
                  <h2>Placement Executive</h2>
                </div>
                <div className="row d-flex justify-content-center">
                  {placementExecutive.map((member, index) => (
                    <div key={index} className="col-xl-3 col-md-6">
                      <div className="single-team mb-40">
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
            )}

            <div className="col">
              <div
                className="d-flex justify-content-center"
                style={{ paddingBottom: "30px", paddingTop: "10px" }}
              >
                <h2>Faculty Advisors</h2>
              </div>
              <div className="row d-flex justify-content-center">
                {facultyAdvisors.map((member, index) => (
                  <div key={index} className="col-xl-3 col-md-6">
                    <div
                      className="single-team mb-40"
                      style={{ minHeight: "400px", maxHeight: "400px" }}
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
                        <p>{member.dept}</p>
                        <div className="team-social">
                          <ul>
                            <li>
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
            <div className="col">
              <div
                className="d-flex justify-content-center"
                style={{ paddingBottom: "30px", paddingTop: "10px" }}
              >
                <h2>CDC Student Heads</h2>
              </div>
              <div className="row">
                {teamMembers.map((member, index) => (
                  <div key={index} className="col-xl-3 col-md-6">
                    <div
                      className="single-team mb-40"
                      style={{ minHeight: "350px", maxHeight: "350px" }}
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
          {/* team members  */}
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingBottom: "30px", paddingTop: "10px" }}
                >
                  <h2>CDC Student Members</h2>
                </div>
                <div className="row">
                  {teams.map((team, teamIndex) => (
                    <div className="col-xl-6 col-md-12 mb-4" key={teamIndex}>
                      <div
                        className="single-team d-flex flex-column justify-content-between"
                        style={{
                          height: "100%",

                          padding: "30px",
                        }}
                      >
                        <div
                          className="d-flex justify-content-center align-items-center"
                          style={{ marginBottom: "10px" }}
                        >
                          <h3>{teamNames[teamIndex]}</h3>
                        </div>
                        <ul
                          className="d-flex flex-column justify-content-center align-items-center"
                          style={{ flex: "1", margin: 0 }}
                        >
                          {team.map((member, index) => (
                            <li
                              key={index}
                              style={{
                                fontWeight: "bold",
                                fontSize: "16px",
                                marginBottom: "5px",
                              }}
                            >
                              {member}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
