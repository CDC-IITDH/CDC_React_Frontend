import React from "react";
import Bredcom from "../Bredcom/Main";
import Brand from "../menhomethree/Brand";
import Touch from "../mencontact/Touch";
import Map from "../mencontact/Map";
import Form from "../mencontact/Form";
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
        <Bredcom title="Home" subtitle="Contact Us"/>
        <Touch/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
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
        <Map/>

    </>
  );
}

export default Main;
