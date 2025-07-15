import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      {/* ==============================
          Breadcumb
      ============================== */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">BLOG STANDARD</h1>
            <ul className="breadcumb-menu">
              <li><Link to="/">Home</Link></li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ==============================
          Blog Area
      ============================== */}
      <section className="th-blog-wrapper space-top space-extra2-bottom">
        <div className="container">
          <div className="row gx-40">
            <div className="col-xxl-8 col-lg-7">

              {/* Blog Post 1 */}
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src="/assets/img/blog/blog-s-1-1.jpg" alt="Blog" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="/blog">
                      <i className="fa-light fa-user"></i> By Jonson
                    </Link>
                    <Link to="/blog">
                      <i className="fa-light fa-calendar"></i> 21 Nov, 2024
                    </Link>
                    <Link to="/blog-details">
                      <i className="fa-light fa-comment"></i> 3 Comments
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link to="/blog-details">
                      Strategies for Dominating Your Favorite Game
                    </Link>
                  </h2>
                  <p className="blog-text">
                    Successful esports teams exhibit strong communication,
                    strategic coordination, and individual player skills. Team
                    chemistry, effective coaching, and adaptability to changing
                    metas are also crucial factors.
                  </p>
                  <Link to="/blog-details" className="link-btn style2">
                    Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="th-blog blog-single has-post-thumbnail">
                <div
                  className="blog-img th-slider"
                  data-slider-options='{"effect":"fade"}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <Link to="/blog-details">
                        <img src="/assets/img/blog/blog-s-1-2.jpg" alt="Blog" />
                      </Link>
                    </div>
                    <div className="swiper-slide">
                      <Link to="/blog-details">
                        <img src="/assets/img/blog/blog-s-1-4.jpg" alt="Blog" />
                      </Link>
                    </div>
                  </div>
                  <button className="slider-arrow slider-prev">
                    <i className="far fa-arrow-left"></i>
                  </button>
                  <button className="slider-arrow slider-next">
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="/blog">
                      <i className="fa-light fa-user"></i> By Jonson
                    </Link>
                    <Link to="/blog">
                      <i className="fa-light fa-calendar"></i> 22 Dec, 2024
                    </Link>
                    <Link to="/blog-details">
                      <i className="fa-light fa-comment"></i> 3 Comments
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link to="/blog-details">
                      Influential Figures in the History of Gaming
                    </Link>
                  </h2>
                  <p className="blog-text">
                    Providing opportunities for professional growth and
                    maintaining a positive work environment. To enhance online
                    presence, consider optimizing your web and utilizing social
                    channels. An effective marketing strategy involves market
                    research, target audience identification, and competition
                    analysis.
                  </p>
                  <Link to="/blog-details" className="link-btn style2">
                    Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="th-blog blog-single">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="/blog">
                      <i className="fa-light fa-user"></i> By Jonson
                    </Link>
                    <Link to="/blog">
                      <i className="fa-light fa-calendar"></i> 24 June, 2024
                    </Link>
                    <Link to="/blog-details">
                      <i className="fa-light fa-comment"></i> 3 Comments
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link to="/blog-details">
                      Must-Visit Gaming Events Worldwide
                    </Link>
                  </h2>
                  <p className="blog-text">
                    An effective marketing strategy involves market research,
                    target audience identification, and competition analysis.
                    Providing opportunities for professional growth and
                    maintaining a positive work environment are key.
                  </p>
                  <Link to="/blog-details" className="link-btn style2">
                    Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>

              {/* Blog Post 4 */}
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img" data-overlay="black" data-opacity="5">
                  <Link to="/blog-details">
                    <img src="/assets/img/blog/blog-s-1-3.jpg" alt="Blog" />
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="/blog">
                      <i className="fa-light fa-user"></i> By Jonson
                    </Link>
                    <Link to="/blog">
                      <i className="fa-light fa-calendar"></i> 09 Sep, 2024
                    </Link>
                    <Link to="/blog-details">
                      <i className="fa-light fa-comment"></i> 3 Comments
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link to="/blog-details">
                      Behind the Scenes of Your Favorite Titles
                    </Link>
                  </h2>
                  <p className="blog-text">
                    From strategic planning to operational optimization, our
                    business consulting team is committed to guiding you through
                    every stage of development.
                  </p>
                  <Link to="/blog-details" className="link-btn style2">
                    Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>

              {/* Blog Post 5 */}
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-audio">
                  <iframe
                    title="Tell Me U Luv Me (with Trippie Redd) by Juice WRLD"
                    src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F830279092&show_artwork=true&maxwidth=751&maxheight=1000&dnt=1"
                  ></iframe>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="/blog">
                      <i className="fa-light fa-user"></i> By Jonson
                    </Link>
                    <Link to="/blog">
                      <i className="fa-light fa-calendar"></i> 10 Sep, 2024
                    </Link>
                    <Link to="/blog-details">
                      <i className="fa-light fa-comment"></i> 3 Comments
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link to="/blog-details">
                      Discover unparalleled expertise in market
                    </Link>
                  </h2>
                  <p className="blog-text">
                    Take the first step towards a brighter business future.
                    Contact us today to explore how our business consulting
                    services can drive innovation and increase efficiency.
                  </p>
                  <Link to="/blog-details" className="link-btn style2">
                    Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>

              <div className="th-pagination">
                <ul>
                  <li>
                    <Link to="/blog">
                      <span className="btn-border"></span> 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <span className="btn-border"></span> 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <span className="btn-border"></span> 3
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <span className="btn-border"></span>
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_search">
                  <form className="search-form">
                    <input type="text" placeholder="Search here..." />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>

                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <Link to="/blog">LIVE GAME</Link>
                      <span>(2)</span>
                    </li>
                    <li>
                      <Link to="/blog">FANTASY</Link>
                      <span>(2)</span>
                    </li>
                    <li>
                      <Link to="/blog">GAMING</Link>
                      <span>(2)</span>
                    </li>
                    <li>
                      <Link to="/blog">MX-XBOX</Link>
                      <span>(2)</span>
                    </li>
                    <li>
                      <Link to="/blog">SHOOTING</Link>
                      <span>(2)</span>
                    </li>
                  </ul>
                </div>

                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/blog/recent-post-1-1.jpg"
                            alt="Blog"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            A Day in the Life of an Esports Event
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="/blog">
                            <i className="fa-light fa-calendar"></i>30 Nov, 2024
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/blog/recent-post-1-2.jpg"
                            alt="Blog"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            Influential Figures in the History
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="/blog">
                            <i className="fa-light fa-calendar"></i>05 Dec, 2024
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            Behind the Scenes of Your Favorite
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="/blog">
                            <i className="fa-light fa-calendar"></i>09 Sep, 2024
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <Link to="/blog"><span>GAME APP</span></Link>
                    <Link to="/blog"><span>E-SPORTS</span></Link>
                    <Link to="/blog"><span>TOURNAMENTS</span></Link>
                    <Link to="/blog"><span>MATCH</span></Link>
                    <Link to="/blog"><span>3D</span></Link>
                    <Link to="/blog"><span>GAME ANIMATION</span></Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
