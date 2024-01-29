import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
function First({blogsData}) {
    const images = require.context("../../assets/img/blogs/", true);
    const { id } = useParams();
    const blogId = parseInt(id, 10);
    // State for window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // Effect for handling resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // Sort blogs once outside the component or pass already sorted blogs
    const sortedBlogs = blogsData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((blog) => {
        return blog;
    });
    const currentBlogIndex = sortedBlogs.findIndex((blog) => blog.id === blogId);

    if (currentBlogIndex === -1) {
        return <div>Blog not found</div>;
    }
    const currentBlog = sortedBlogs[currentBlogIndex];
    const { title, date, image, description, content } = currentBlog;    
    const prevBlog = currentBlogIndex > 0 ? sortedBlogs[currentBlogIndex - 1] : null;
    // The next blog (older) is at a higher index
     const nextBlog = currentBlogIndex < sortedBlogs.length - 1 ? sortedBlogs[currentBlogIndex + 1] : null;
    const isMobile = windowWidth < 980; // Adjust this threshold as per your design's mobile breakpoint

    return (
        <>
            <section className="inner-blog b-details-p pt-120 pb-120" style={{paddingLeft:isMobile?"0%":"10%",paddingRight:isMobile?"0%":"10%"}}>
                <div className="container">
                    <div className="row">
                        <div 
                        // className="col-lg-8"
                        >
                            <div className="blog-details-wrap">
                                <div className="details__content pb-30">
                                    <h2 style={{display:isMobile ? 'flex':'none' }}>
                                        {title}
                                    </h2>
                                    <div className="meta-info">
                                        <ul style={{display:isMobile ? 'flex':'none' }}>
                                            {/* <li>
                                                <i className="fal fa-eye" /> 100 Views
                                            </li> */}
                                            {/* <li>
                                                <i className="fal fa-comments" /> 35 Comments
                                            </li> */}
                                            <li >
                                                <i className="fal fa-calendar-alt" /> {date}
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    
                              
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{
                                            display: 'flex',
                                            gap: '40px',
                                            flexDirection: isMobile ? 'column' : 'row',
                                            alignItems: 'flex-start',
                                            height: isMobile ? 'auto' : '100%',
                                            marginBottom: "20px"
                                        }}>
                                            <img src={images(image)} alt="" style={{
                                                width: isMobile ? '100%' : '400px',
                                                height: isMobile ? 'auto' : '100%',
                                                objectFit: 'cover',
                                            }} />
                                            <div style={{
                                                flex: 1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between', // Adjust content spacing
                                                height: isMobile ? 'auto' : '100%'  // Match the height with the image
                                            }}>
                                                <h2 style={{ display: isMobile ? 'none' : 'flex' }}>
                                                    {title}
                                                </h2>
                                                <div className="meta-info" style={{ display: isMobile ? 'none' : 'flex', borderTop: "2px solid #ff7350" }}>
                                                    <ul>
                                                        <li>
                                                            <i className="fal fa-calendar-alt" /> {date}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4 style={{
                                                    marginBottom: "40px", 
                                                    marginTop: "20px", 
                                                    color: "black", 
                                                    textAlign: "justify", 
                                                    flexGrow: 1, // Allow the description to fill the space
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                    
                                                }}>
                                                    {description}
                                                </h4>
                                            </div>
                                        </div>

                                        {content.map((item, index) => (
                                            <div key={index}>
                                                <h3 style={{color:"#ff7350"}}>{item.section}</h3>
                                                <p style={{textAlign:"justify",color:"black"}}>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* <blockquote>
                                        <footer>By Rosalina Pong</footer>
                                        <h3>
                                            Viral dreamcatcher keytar typewriter, aest hetic offal umami.
                                            Aesthetic polaroid pug pitchfork post-ironic.
                                        </h3>
                                    </blockquote> */}
                                    {/* <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deser unt mollit anim id est laborum.
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusant.
                                    </p> */}
                                   
                                    {/* <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deser unt mollit anim id est laborum.
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa
                                        quae ab illo inventore veritatis et quasi archi tecto beatae vitae
                                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                        asperna tur aut odit aut fugit, sed quia consequuntur magni
                                        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                        adipisci velit, sed quia non num quam eius modi tempora incidunt
                                        ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum
                                        dolor sit amet,consectetur adipisicing elit, sed do eiusmod
                                        incididunt.
                                    </p> */}
                                    {/* <figure>
                                        <img src="assets/img/blog/b_details02.jpg" alt="" />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna ali qua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ulla mco laboris
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                            nulla pariatur. Excepteur sint occaecat cupida tat non proident,
                                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                            quae ab illo inventore veritatis et quasi architecto beatae
                                            vitae dicta sunt explicabo.Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </p>
                                    </figure> */}
                                    {/* <div className="row">
                                        <div className="col-xl-12 col-md-12">
                                            <div className="post__tag">
                                                <h5>Releted Tags</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">organic</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Foods</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">tasty</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div className="posts_navigation pt-35 pb-35">
                                    <div className="row align-items-center">
                                        <div className="col-xl-4 col-md-5">
                                            <div className="prev-link">
                                                <span>Prev Post</span>
                                                <h4>
                                                    <a href="#">Tips Minimalist</a>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-2 text-left text-md-center">
                                            <Link to="/blog" className="blog-filter">
                                                <img src="assets/img/icon/c_d01.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="col-xl-4 col-md-5">
                                            <div className="next-link text-left text-md-right">
                                                <span>next Post</span>
                                                <h4>
                                                    <a href="#">Less Is More</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="posts_navigation pt-35 ">
        <div className="row align-items-center">
          <div className="col-xl-4 col-md-5">
            {prevBlog && (
              <div 
            //   className="prev-link"
              >
                <span>Prev Post</span>
                <h4>
                  <Link to={`/blog-details/${prevBlog.id}`} >{prevBlog.title}</Link>
                </h4>
              </div>
            )}
          </div>
          <div className="col-xl-4 col-md-2 text-left text-md-center">
            <Link to="/blog" className="blog-filter">
              <img src="assets/img/icon/c_d01.png" alt="" />
            </Link>
          </div>
          <div className="col-xl-4 col-md-5">
            {nextBlog && (
              <div 
            //   className="next-link text-left text-md-right"
            >
                <span>Next Post</span>
                <h4>
                  <Link to={`/blog-details/${nextBlog.id}`}>{nextBlog.title}</Link>
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
                                {/* <div className="related__post mt-45 mb-85">
                                    <div className="post-title">
                                        <h4>Related Post</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="related-post-wrap mb-30">
                                                <div className="post-thumb">
                                                    <img src="assets/img/blog/b_details03.jpg" alt="" />
                                                </div>
                                                <div className="rp__content">
                                                    <h3>
                                                        <a href="#">
                                                            Auis nostrud exercita ullamco laboris nisi ut
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                                                        sed do eiusmod temp or incididunt ut labore et dolore.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="related-post-wrap mb-30">
                                                <div className="post-thumb">
                                                    <img src="assets/img/blog/b_details04.jpg" alt="" />
                                                </div>
                                                <div className="rp__content">
                                                    <h3>
                                                        <a href="#">
                                                            Excepteur sint occaecat cupida tat non proident
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                                                        sed do eiusmod temp or incididunt ut labore et dolore.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="avatar__wrap text-center mb-45">
                                    <div className="avatar-img">
                                        <img src="assets/img/blog/comment/avatar.png" alt="" />
                                    </div>
                                    <div className="avatar__info">
                                        <h5>Rosalina William</h5>
                                        <div className="avatar__info-social">
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-instagram" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-behance" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="avatar__wrap-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequa aute irure dolor.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div className="comment__wrap pb-45">
                                    <div className="comment__wrap-title">
                                        <h5>Comments</h5>
                                    </div>
                                    <div className="single__comment mb-35">
                                        <div className="comments-avatar">
                                            <img src="assets/img/blog/comment/c_01.png" alt="" />
                                        </div>
                                        <div className="comment-text">
                                            <div className="avatar-name mb-15">
                                                <h6>ALina Kelian</h6>
                                                <span>19th May 2021</span>
                                            </div>
                                            <p>
                                                The bee's knees bite your arm off bits and bobs he nicked it
                                                gosh gutted mate blimey, old off his nut argy bargy vagabond
                                                buggered dropped.
                                            </p>
                                            <a href="#" className="comment-reply mt-15">
                                                <i className="fas fa-reply" /> Reply
                                            </a>
                                        </div>
                                    </div>
                                    <div className="single__comment children mb-35">
                                        <div className="comments-avatar">
                                            <img src="assets/img/blog/comment/c_02.png" alt="" />
                                        </div>
                                        <div className="comment-text">
                                            <div className="avatar-name mb-15">
                                                <h6>
                                                    Rlex Kelian <i className="fas fa-bookmark" />
                                                </h6>
                                                <span>19th May 2021</span>
                                            </div>
                                            <p>
                                                Do one say wind up buggered bobby bite your arm off gutted
                                                mate, David victoria sponge cup of char chap fanny around.
                                            </p>
                                            <a href="#" className="comment-reply mt-15">
                                                <i className="fas fa-reply" /> Reply
                                            </a>
                                        </div>
                                    </div>
                                    <div className="single__comment">
                                        <div className="comments-avatar">
                                            <img src="assets/img/blog/comment/c_03.png" alt="" />
                                        </div>
                                        <div className="comment-text">
                                            <div className="avatar-name mb-15">
                                                <h6>Roboto Alex</h6>
                                                <span>21th May 2021</span>
                                            </div>
                                            <p>
                                                Baking cakes is cobblers wellies William geeza bits and bobs
                                                what a plonker it's your round,
                                            </p>
                                            <a href="#" className="comment-reply mt-15">
                                                <i className="fas fa-reply" /> Reply
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div id="comments" className="comments-area  mt-45">
                                    <div id="respond" className="comment-respond">
                                        <h3 id="reply-title" className="comment-reply-title">
                                            Leave a Reply{" "}
                                            <small>
                                                <a rel="nofollow" id="cancel-comment-reply-link" href="/finco/?p=2112#respond" style={{ display: "none" }} >
                                                    Cancel reply
                                                </a>
                                            </small>
                                        </h3>
                                        <form action="http://wordpress.zcube.in/finco/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate="" >
                                            <p className="comment-notes">
                                                <span id="email-notes">
                                                    Your email address will not be published.
                                                </span>{" "}
                                                Required fields are marked <span className="required">*</span>
                                            </p>
                                            <p className="comment-field">
                                                <i className="fas fa-user" />
                                                <input id="author" placeholder="Your Name" name="author" type="text" />
                                            </p>
                                            <p className="comment-field">
                                                <i className="fas fa-envelope" />
                                                <input id="email" placeholder="your-real-email@example.com" name="email" type="text" />
                                            </p>
                                            <p className="comment-field">
                                                <i className="fas fa-globe" />
                                                <input id="url" name="url" placeholder="http://your-site-name.com" type="text" />{" "}
                                            </p>
                                            <p className="comment-form-comment">
                                                <label htmlFor="comment">Comment</label>{" "}
                                                <textarea id="comment" name="comment" cols={45} rows={8} maxLength={65525} required="required" defaultValue={""} />
                                            </p>
                                            <p className="form-submit">
                                                <input name="submit" type="submit" id="submit" className="submit" defaultValue="Post Comment" />{" "}
                                                <input type="hidden" name="comment_post_ID" defaultValue={2112} id="comment_post_ID" />
                                                <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                                            </p>
                                        </form>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                        {/* <div className="col-sm-12 col-md-12 col-lg-4"> */}
                            {/* <aside className="sidebar-widget">
                                <section id="search-3" className="widget widget_search">
                                    <h2 className="widget-title">Search</h2>
                                    <form role="search" method="get" className="search-form" action="http://wordpress.zcube.in/finco/">
                                        <label>
                                            <span className="screen-reader-text">Search for:</span>
                                            <input type="search" className="search-field" placeholder="Search …" defaultValue="" name="s" />
                                        </label>
                                        <input type="submit" className="search-submit" defaultValue="Search" />
                                    </form>
                                </section>
                                <section id="custom_html-5" className="widget_text widget widget_custom_html">
                                    <h2 className="widget-title">Follow Us</h2>
                                    <div className="textwidget custom-html-widget">
                                        <div className="widget-social">
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-instagram" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-wordpress" />
                                            </a>
                                        </div>
                                    </div>
                                </section>
                                <section id="categories-1" className="widget widget_categories">
                                    <h2 className="widget-title">Categories</h2>
                                    <ul>
                                        <li className="cat-item cat-item-16">
                                            <a href="#">Branding</a> (4)
                                        </li>
                                        <li className="cat-item cat-item-23">
                                            <a href="#">Corporat</a> (3)
                                        </li>
                                        <li className="cat-item cat-item-18">
                                            <a href="#">Design</a> (3)
                                        </li>
                                        <li className="cat-item cat-item-22">
                                            <a href="#">Gallery</a> (3)
                                        </li>
                                    </ul>
                                </section>
                                <section id="recent-posts-4" className="widget widget_recent_entries">
                                    <h2 className="widget-title">Recent Posts</h2>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                User Experience Psychology And Performance Smshing
                                            </a>
                                            <span className="post-date">August 19, 2020</span>
                                        </li>
                                        <li>
                                            <a href="#">Monthly Web Development Up Cost Of JavaScript</a>
                                            <span className="post-date">August 19, 2020</span>
                                        </li>
                                        <li>
                                            <a href="#">
                                                There are many variation passages of like available.
                                            </a>
                                            <span className="post-date">August 19, 2020</span>
                                        </li>
                                    </ul>
                                </section>
                                <section id="tag_cloud-1" className="widget widget_tag_cloud">
                                    <h2 className="widget-title">Tag</h2>
                                    <div className="tagcloud">
                                        <a href="#" className="tag-cloud-link tag-link-28 tag-link-position-1" style={{ fontSize: "8pt" }} aria-label="app (1 item)" >
                                            app
                                        </a>
                                        <a href="#" className="tag-cloud-link tag-link-17 tag-link-position-2" style={{ fontSize: "8pt" }} aria-label="Branding (1 item)" >
                                            Branding
                                        </a>
                                        <a href="#" className="tag-cloud-link tag-link-20 tag-link-position-3" style={{ fontSize: "8pt" }} aria-label="corporat (1 item)" >
                                            corporat
                                        </a>
                                        <a href="#" className="tag-cloud-link tag-link-24 tag-link-position-4" style={{ fontSize: "16.4pt" }} aria-label="Design (2 items)" >
                                            Design
                                        </a>
                                        <a href="#" className="tag-cloud-link tag-link-25 tag-link-position-5" style={{ fontSize: "22pt" }} aria-label="gallery (3 items)" >
                                            gallery
                                        </a>
                                        <a href="#" className="tag-cloud-link tag-link-26 tag-link-position-6" style={{ fontSize: "8pt" }} aria-label="video (1 item)" >
                                            video
                                        </a>
                                        <a href="#" className="tag-cloud-link tag-link-29 tag-link-position-7" style={{ fontSize: "16.4pt" }} aria-label="web design (2 items)" >
                                            web design
                                        </a>
                                    </div>
                                </section>
                            </aside> */}
                        </div>

                    </div>
                {/* </div> */}
            </section>
        </>
    )
}

export default First