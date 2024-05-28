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

import teamMemberImage1 from "../../../assets/img/team/srihari.jpeg";
import teamMemberImage2 from "../../../assets/img/team/agrim.jpeg";
import teamMemberImage3 from "../../../assets/img/team/saksham.jpeg";

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

  const placementExecutive = [
    {
      name: "Sameer Joshi",
      role: "",
      image: defaultProfileImage,
      phone: "+91 85533 16439",
      mail: "sameerjoshi@iitdh.ac.in",
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
      name: "Agrim Jain",
      role: "",
      image: teamMemberImage2,
      phone: "+91 95288 76421",
      mail: "210010003@iitdh.ac.in",
      linkedin: "https://www.linkedin.com/in/agrim-jain-6b9356234/",
      instagram: "https://www.instagram.com/agrimjain_26/",
    },
    {
      name: "Saksham Chhimwal",
      role: "",
      image: teamMemberImage3,
      phone: "+91 82795 69911",
      mail: "210010046@iitdh.ac.in",
      linkedin: "https://www.linkedin.com/in/saksham-chhimwal-838baa25a/",
      instagram: "https://www.instagram.com/sakshamchhimwal/",
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

  const teams = [
    [
      "Aayush Vats",
      "Aditi Soukar",
      "Ameya Langer",
      "Anvay Jaykar",
      "Arpan Sahu",
      "Atharva Tijare",
      "Bidipta Saha",
      "Gurjaipal Singh",
      "Ishaan Janjuha",
      "Jai Sharma",
      "Kavichelvan",
      "Krunal Patel",
      "Krutay Upadhyay",
      "Lavanya Shende",
      "Md Inzamamul Haque",
      "Meghana Bhat",
      "Nandini G",
      "Nihar Sagar G",
      "Nipun Gupta",
      "Nishant Shailesh Mehta",
      "Omkar Kulkarni",
      "Prajwal N Prasad",
      "Prashant Veer",
      "Priyanshu Mishra",
      "Rishita Seepana",
      "Sai Sreeharsha Bolloju",
      "Shubham Raj",
      "Shubhranil Kundu",
      "Siddharth Kumar Nishad",
      "Sujay C",
      "Surya Narayan Upadhyay",
      "Utkarsh Gupta",
      "Vatista Kachroo",
      "Vedansh Chaudhary",
      "Vedant Kannur",
      "Velivela Mohith Naga Sai",
      "Vidhi Kadam",
      "Vidit Parikh",
      "Yash Halbhavi",
    ],
    [
      "Jaya Surya",
      "Nitin Vangipuram",
      "R Eshwar",
      "R Amogh",
      "Akella Vyaghra Satya Sreenivasu",
      "Parikshit Gehlaut",
    ],
  ];

  const teamNames = ["CDC Team", "Technical Team"];

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
            <div className="col">
              <div
                className="d-flex justify-content-center"
                style={{ paddingBottom: "30px", paddingTop: "10px" }}
              >
                <h2>CDC Student Heads</h2>
              </div>
              <div className="row">
                {teamMembers.map((member, index) => (
                  <div key={index} className="col-xl-4 col-md-6">
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
