import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../data/blogs.json";
import TwitterTimeline from "../TwitterTimeline/Main";
import TPO_ad from "../../assets/img/TPO/Advertisement_TPO_page-0001.jpg";
function Blog() {
  const images = require.context("./../../assets/img/blogs/", true);
  const sortedBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
    .map((blog) => {
      return blog;
    });

  return (
    <>
      <section
        id="blog"
        className="blog-area p-relative fix pt-120 pb-90"
        style={{
          backgroundImage: "url(assets/img/bg/blog_bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>
                  <i className="fal fa-graduation-cap" /> Our Blog
                </h5>
                <h2>Latest Blog &amp; News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {sortedBlogs.map((blog) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div
                    className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                    data-animation="fadeInUp"
                    data-delay=".4s"
                  >
                    <div className="blog-thumb2">
                      <Link to={`/blog-details/${blog.id}`}>
                        <img src={images(blog.image)} alt="" />
                      </Link>
                      <div className="date-home">
                        <i className="fal fa-calendar-alt" /> {blog.date}
                      </div>
                    </div>
                    <div
                      className="blog-content2"
                      style={{ minHeight: "250px" }}
                    >
                      <div className="b-meta">
                        <div className="meta-info">
                          <ul>
                            {/* <li>
                                <i className="fal fa-user" /> By Admin{" "}
                            </li> */}
                            {/* <li>
                                <i className="fal fa-comments" /> 3 Comments
                            </li> */}
                          </ul>
                        </div>
                      </div>
                      <h4 style={{ height: "60px", overflow: "hidden" }}>
                        <Link to={`/blog-details/${blog.id}`}>
                          {blog.title}
                        </Link>
                      </h4>
                      <p style={{ height: "70px", overflow: "hidden" }}>
                        {blog.description.split(" ").slice(0, 11).join(" ")}
                      </p>
                      <div
                        className="blog-btn"
                        style={{ position: "absolute", bottom: "10px" }}
                      >
                        <Link to={`/blog-details/${blog.id}`}>
                          Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-lg-4 col-md-6">
                    <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="blog-thumb2">
                        <Link to="/blog-details">
                            <img src="assets/img/blog/inner_b2.jpg" alt="img" />
                        </Link>
                        <div className="date-home">
                        <i className="fal fa-calendar-alt" /> 24th March 2023
                        </div>
                    </div>
                    <div className="blog-content2">
                        <div className="b-meta">
                        <div className="meta-info">
                            <ul>
                            <li>
                                <i className="fal fa-user" /> By Admin{" "}
                            </li>
                            <li>
                                <i className="fal fa-comments" /> 3 Comments
                            </li>
                            </ul>
                        </div>
                        </div>
                        <h4>
                        <Link to="/blog-details">
                            Dras accumsan nulla nec lacus ultricies placerat.
                        </Link>
                        </h4>
                        <p>
                        Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                        dignissim ligula, nec tristique orci.
                        </p>
                        <div className="blog-btn">
                        <Link to="/blog-details">
                            Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div> */}
            {/* <div className="col-lg-4 col-md-6">
                    <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="blog-thumb2">
                        <Link to="/blog-details">
                            <img src="assets/img/blog/inner_b3.jpg" alt="img" />
                        </Link>
                        <div className="date-home">
                        <i className="fal fa-calendar-alt" /> 24th March 2023
                        </div>
                    </div>
                    <div className="blog-content2">
                        <div className="b-meta">
                        <div className="meta-info">
                            <ul>
                            <li>
                                <i className="fal fa-user" /> By Admin{" "}
                            </li>
                            <li>
                                <i className="fal fa-comments" /> 3 Comments
                            </li>
                            </ul>
                        </div>
                        </div>
                        <h4>
                        <Link to="/blog-details">
                            Seas accumsan nulla nec lacus ultricies placerat.
                        </Link>
                        </h4>
                        <p>
                        Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                        dignissim ligula, nec tristique orci.
                        </p>
                        <div className="blog-btn">
                        <Link to="/blog-details">
                            Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div> */}
          </div>
          <TwitterTimeline />
          <div className="container mt-40">
            <img src={TPO_ad} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;
