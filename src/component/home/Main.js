import React from "react";
import About from "../menhome/About";
import Courses from "../menhome/Courses";
import Event from "../menhome/Event";
import Scholarship from "../menhome/Scholarship";
import Shep from "../menhome/Shep";
import Slider from "../menhome/Sliderone";
import Frequently from "../menhome/Frequently";
import Video from "../menhome/Video";
import Testimonial from "../menhome/Testimonial";
import Search from "../menhome/Search";
import Admission from "../menhome/Admission";
import Redslider from "../menhome/Redslider";
import Blog from "../menhome/Blog";
import Subscribe from "../menhome/Subscribe";
import Testimonialthree from "../menhomethree/Testimonialthree";

function Main() {
  return (
    <>
      <Slider />
      <About />
      <Courses />
      {/* <Shep/> */}
      <Event />
      {/* <Scholarship/> */}
      {/* <Frequently/> */}
      {/* <Video/> */}
      <Testimonial />
      <Testimonialthree />    {/* ------- Director's Message  ---------- */}
      {/* <Search/> */}
      {/* <Admission/> */}
      <Redslider />
      <Blog />
      <Subscribe />
    </>
  );
}

export default Main;
