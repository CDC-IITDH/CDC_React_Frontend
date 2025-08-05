import React from "react";
import { Link } from "react-router-dom";

import DefaultImage from "../../../assets/img/team/default-avatar-profile.jpg";
import facultyInChargeImage1 from "../../../assets/img/team/Satya_Priya_Image.jpeg";
import facultyInChargeImage2 from "../../../assets/img/team/ankit_v_k.JPG";

import facultyAdvisorsImage1 from "../../../assets/img/team/Vandana_Bharti_Image.jpeg";
import facultyAdvisorsImage2 from "../../../assets/img/team/Sairam_Boggavarapu_Image.jpeg";
import facultyAdvisorsImage3 from "../../../assets/img/team/Naveen_MB_Image.jpeg";
import facultyAdvisorsImage4 from "../../../assets/img/team/Dhriti_Sundar_Ghosh_Image.jpeg";
import facultyAdvisorsImage5 from "../../../assets/img/team/Suvamay_Jana_Image.jpeg";
import facultyAdvisorsImage6 from "../../../assets/img/team/Ramesh_Nayaka_Image.jpeg";

import teamMemberImage1 from "../../../assets/img/team/surya.jpeg";
import teamMemberImage2 from "../../../assets/img/team/mohit.jpeg";
import teamMemberImage3 from "../../../assets/img/team/varun.jpg";
import placementExecutiveImage from "../../../assets/img/team/Sameer_Joshi_Image.jpg";
import TPO_Image from "../../../assets/img/team/Murali.jpeg";
import tpo1 from "../../../assets/img/team/nethaji.jpeg";

function First() {
  const facultyInCharge = [
    {
      name: "Prof. Satyapriya Gupta",
      role: "Assistant Professor",
      dept: "Dept. of Mechanical, Materials and Aerospace Engineering",
      image: facultyInChargeImage1,
      phone: "+91 88268 24591",
      mail: "cdcfic@iitdh.ac.in",
    },
    {
      name: "Prof. Aniket Vasantrao Kataware",
      role: "Assistant Professor",
      dept: "Dept. of Civil & Infrastructure Engineering",
      image: facultyInChargeImage2,
      phone: "",
      mail: "aniket.kataware@iitdh.ac.in",
    },
  ];

  const TPO = [
    {
      name: "Murali Krishna E",
      role: "Training & Placement Officer",
      dept: "",
      image: TPO_Image,
      mail: "muralik@iitdh.ac.in",
      Email: "muralik@iitdh.ac.in",
      position: "Training & Placement Officer",
    },
    {
      name: "Nethaji Kumar D",
      role: "Training & Placement Officer",
      dept: "",
      image: tpo1,
      mail: "nethajikumar@iitdh.ac.in",
      Email: "nethajikumar@iitdh.ac.in",
      position: "Training & Placement Officer",
    },
  ];
  const placementExecutive = [
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
      name: "Velivela Mohith Naga",
      role: "",
      image: teamMemberImage2,
      phone: "+91 93474 58634",
      mail: "220120028@iitdh.ac.in",
      linkedin: "https://www.linkedin.com/in/velivela-mohith-naga-sai-4a3b32264/?originalSubdomain=in",
      
    },
    {
      name: "Surya Narayan Upadhyay",
      role: "",
      image: teamMemberImage1,
      phone: "+91 73984 21950",
      mail: "220020052@iitdh.ac.in",
      linkedin: "https://www.linkedin.com/in/surya-narayan-upadhyay/"
    },
  ];

  const seniorCoordinators = [
    { name: "Nilesh", mail: "", phone: "" },
    { name: "Yash", mail: "", phone: "" },
    { name: "Varshita", mail: "", phone: "" },
    { name: "Abhiraj", mail: "", phone: "" },
    { name: "Shreya", mail: "", phone: "" },
    { name: "Ritesh", mail: "", phone: "" },
    { name: "Kavichelvan", mail: "", phone: "" },
    { name: "Shreyas", mail: "", phone: "" },
    { name: "Dev Srivastav", mail: "", phone: "" },
    { name: "Saikat Ghosh", mail: "", phone: "" },
    { name: "Vidit", mail: "", phone: "" },
    { name: "Swaroop Sahoo", mail: "", phone: "" },
  ];

  const cdcTeam = [
    [
      "Nilesh",
      "Yash",
      "Varshita",
      "Abhiraj",
      "Shreya",
      "Ritesh",
      "Kavichelvan",
      "Shreyas",
      "Dev Srivastav",
      "Saikat Ghosh",
      "Vidit",
      "Swaroop Sahoo",
    ],

    // [
    //   "Lavanya Shende",
    //   "Md Inzamamul Haque",
    //   "Meghana Bhat",
    //   "Nandini G",
    //   "Nihar Sagar G",
    //   "Nipun Gupta",
    //   "Nishant Shailesh Mehta",
    //   "Omkar Kulkarni",
    //   "Prajwal N Prasad",
    //   "Prashant Veer",
    //   "Priyanshu Mishra",
    //   "Rishita Seepana",
    //   "Sai Sreeharsha Bolloju",
    // ],
    // [
    //   "Shubham Raj",
    //   "Shubhranil Kundu",
    //   "Siddharth Kumar Nishad",
    //   "Sujay C",
    //   "Surya Narayan Upadhyay",
    //   "Utkarsh Gupta",
    //   "Vatista Kachroo",
    //   "Vedansh Chaudhary",
    //   "Vedant Kannur",
    //   "Velivela Mohith Naga Sai",
    //   "Vidhi Kadam",
    //   "Vidit Parikh",
    //   "Yash Halbhavi",
    // ],
  ];

  const cdcTechTeam = [
    [
      "Jaya Surya",
      "Nitin Vangipuram",
      "R Eshwar",
      "Akella Vyaghra Satya Sreenivasu",
      "Parikshit Gehlaut",
      "Sivamohan",
    ],
  ];

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
                style={{
                  paddingBottom: "30px",
                  paddingTop: "10px",
                }}
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

            {/* <div className="d-flex justify-content-center row"> */}
             <h2 className="text-center">Training & Placement Officer</h2>
            {TPO.length > 0 && (
              <div className="col">
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingBottom: "30px", paddingTop: "10px" }}
                ></div>
                <div className="row d-flex justify-content-center">
                  {TPO.map((member, index) => (
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
                          <p>{member.phone}</p>
                          <p>{member.Email}</p>
                          <div className="team-social">
                            <ul>
                              <li>
                                {" "}
                                <Link to={`mailto:${member.mail}`}>
                                  <i className="fa fa-envelope" />
                                </Link>
                              </li>
                              {/* <li>
                                <Link to={`tel:${member.phone}`}>
                                  <i className="fa fa-phone" />
                                </Link>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* <div className="d-flex justify-content-center row"> */}
            {placementExecutive.length > 0 && (
              <div className="col">
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingBottom: "30px", paddingTop: "10px" }}
                ></div>
                <div className="row d-flex justify-content-center">
                <h2 className="text-center">Placement Executive</h2>
                  {placementExecutive.map((member, index) => (
                    <div key={index} className="col-xl-3 col-md-6">
                      {/* <h2 className="text-center">{member.position}</h2> */}
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
                              {/* <li>
                                <Link to={member.linkedin}>
                                  <i className="fab fa-linkedin" />
                                </Link>
                              </li>
                              <li>
                                <Link to={member.instagram}>
                                  <i className="fab fa-instagram" />
                                </Link>
                              </li>*/}
                              <li>
                                {" "}
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
            )}

            {/* </div> */}
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
                            {/* <li>
                              <Link to={member.instagram}>
                                <i className="fab fa-instagram" />
                              </Link>
                            </li> */}
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
                      style={{ minHeight: "420px" }}
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
            {/* Senior Coordinators */}
            <div
              className="col-12"
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: " center",
              }}
            >
              <div className="card col-md-6">
                <div className="card-body" >
                  <h3 className="text-center">Student Coordinators</h3>
                  <div className="row">
                    {seniorCoordinators.map((member, index) => (
                      <div key={index} className="mb-4">
                        <div className="single-team" style={{ height: "12vh" }}>
                          <div
                            className="team-info"
                            style={{
                              display: "flex",
                              alignContent: "center",
                              justifyContent: " center",
                            }}
                          >
                            <h4
                              style={{
                                flex: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Link to="#">{member.name}</Link>
                            </h4>
                            <div className="team-social" style={{ flex: 1 }}>
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
              </div>
            </div>
          </div>
          {/* team members  */}
          {/* <div className="container mt-4">
            <div className="row">
              <div
                className="d-flex justify-content-center"
                style={{ paddingBottom: "30px", paddingTop: "10px" }}
              >
                <h2>CDC Student Members</h2>
              </div>
              <div className="col-12 col-md-9 ">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-center">CDC Team</h3>
                    <div className="row">
                      {cdcTeam.map((team, index) => (
                        <div key={index} className="col-md-4 col-sm-12 ">
                          <ul className="list-group">
                            {team.map((member, memberIndex) => (
                              <li
                                key={memberIndex}
                                className="list-group-item border-0"
                              >
                                {member}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 ">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-center">Technical Team</h3>
                    <div className="row">
                      {cdcTechTeam.map((team, index) => (
                        <div key={index} className="col-md-12 col-sm-12 ">
                          <ul className="list-group">
                            {team.map((member, memberIndex) => (
                              <li
                                key={memberIndex}
                                className="list-group-item border-0"
                              >
                                {member}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default First;
