import React from "react";
import University from "../Menabout/University";
import Bredcom from "../Bredcom/Main";
import Scholarship from "../menhome/Scholarship";
import Frequently from "../menhome/Frequently";
import Campus from "../Menabout/Campus";
import Testimonial from "../menhome/Testimonial";
import Brand from "../menhomethree/Brand";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="About Us" />
      <University />
      {/* <Scholarship /> */}
      {/* <Frequently /> */}
      <Campus />
      {/* <Testimonial /> */}
      {/* <Brand /> */}
    </>
  );
}

export default Main;
