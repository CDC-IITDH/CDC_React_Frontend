import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../component/footer/Main";
import About from "../component/About/Main";
import Event from "../component/Pages/event/Main";
import Eventdeatils from "../component/Pages/eventdeatils/Main";
import Gallery from "../component/Pages/gallery/Main";
import RecruiterFaq from "../component/Pages/recruiterFaq/Main";
import StudentFaq from "../component/Pages/studentFaq/Main";
import Teacher from "../component/Pages/Teacher/Main";
import Error from "../component/Pages/error/Main";
import Blog from "../component/Blog/Main";
import Blogdeatils from "../component/Blogdeatils/Main";
import Contact from "../component/contact/Main";
import Home from "../component/home/Main";
import Header from "../component/headerone/Main";
import eventsData from "../data/events.json";
import blogsData from "../data/blogs.json";
import Timeline from "../component/Pages/timeline/Main";
import PlacementTimeline from "../component/Pages/Placementtimeline/Main";
import DirectorsMessage from "../component/DirectorsMessage/Main";
function Index() {
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route
          path="/single-event/:id"
          element={<Eventdeatils eventsData={eventsData} />}
        />
        <Route path="/internship" element={<Timeline />} />
        <Route path="/placement" element={<PlacementTimeline />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/student/faq" element={<StudentFaq />} />
        <Route path="/recruiter/faq" element={<RecruiterFaq />} />
        <Route path="/team" element={<Teacher />} />

        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog-details/:id"
          element={<Blogdeatils blogsData={blogsData} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Directors-Message" element={<DirectorsMessage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Index;
