import React from 'react'
import { Link } from 'react-router-dom'

function First() {
    const facultyInCharge = [
        { name: "Dr. Naveen M B", role: "Assistant Professor", dept:"Dept. of Electrical Engineering", image: "assets/img/team/NaveenMB_Image.jpeg" }
    ]

    const placementExecutive = [
        { name: "Priyanka Naga", role: "", image: "assets/img/team/SAVE_20230606_231008 - Priyanka N.jpg" }
    ]

    const facultyAdvisors = [
        { name: "Dr. Vandana Bharti", role: "Assistant Professor", dept:"Dept. of Computer Science and Engineering", image: "assets/img/team/team09.png" },
        { name: "Dr. Sairam Boggavarapu", role: "Assistant Professor", dept:"Dept. of EECE", image: "assets/img/team/team09.png" },
        { name: "Dr. Satyapriya Gupta", role: "Assistant Professor", dept:"Dept. of Mechanical, Materials and Aerospace Engineering", image: "assets/img/team/team09.png" },
        { name: "Dr. Dhriti Sundar Ghosh", role: "Assistant Professor", dept:"Dept. of Physics", image: "assets/img/team/team09.png" },
        { name: "Dr. Suvamay Jana", role: "Assistant Professor", dept:"Dept. of Chemical Engineering", image: "assets/img/team/team09.png" },
        { name: "Dr. Ramesh Nayaka", role: "Assistant Professor", dept:"Dept. of Civil and Infrastruture Engineering", image: "assets/img/team/team09.png" },
    ]
    const teamMembers = [
        { name: "Aryan Trimukhe", role: "", image: "assets/img/team/Aryan_Photo_Square - Trimukhe Aryan Dhananjay.jpg" },
        { name: "Dharani Samsritha", role: "", image: "assets/img/team/InShot_20220905_215808159 - Pasumarthi Dharani Samsritha.jpg" },
        { name: "Varad Kamtekar", role: "", image: "assets/img/team/081AE1D4-053F-4E3C-A68C-D98450DD9172 - Kamtekar Varad Mahesh -2.jpg" },
        { name: "Rahul Raj", role: "", image: "assets/img/team/rahul-raj - Rahul Raj.jpg" },
    ];

    return (
        <>
            <section className="team-area fix p-relative pt-150 pb-80" style={{ background: "#f7f9ff" }}>
                <div className="animations-06">
                    <img src="assets/img/bg/an-img-17.png" alt="an-img-01" />
                </div>
                <div className="animations-09">
                    <img src="assets/img/bg/slider_shape03.png" alt="contact-bg-an-01" />
                </div>
                <div className="container">
                    <div className='col'>
                        <div className='col'>
                            <div className='d-flex justify-content-center'>
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
                                                            <Link to="#">
                                                                <i className="fab fa-facebook-f" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fab fa-instagram" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <Link to="#">
                                                                <i className="fab fa-twitter" />
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
                        <div className='col'>
                        <div className='d-flex justify-content-center'>
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
                                                            <Link to="#">
                                                                <i className="fab fa-facebook-f" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fab fa-instagram" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <Link to="#">
                                                                <i className="fab fa-twitter" />
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
                        <div className='col'>
                        <div className='d-flex justify-content-center'>
                                <h2>Faculty Advisors</h2>
                            </div>
                            <div className="row d-flex justify-content-center">
                                {facultyAdvisors.map((member, index) => (
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
                                                            <Link to="#">
                                                                <i className="fab fa-facebook-f" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fab fa-instagram" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <Link to="#">
                                                                <i className="fab fa-twitter" />
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
                        <div className='col'>
                        <div className='d-flex justify-content-center'>
                                <h2>CDC Student Heads</h2>
                            </div>
                            <div className="row">
                                {teamMembers.map((member, index) => (
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
                                                            <Link to="#">
                                                                <i className="fab fa-facebook-f" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fab fa-instagram" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <Link to="#">
                                                                <i className="fab fa-twitter" />
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
            </section>
        </>
    )
}

export default First
