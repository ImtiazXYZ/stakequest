import React from 'react';

const Footer = () => (
  <footer className="footer">
    <style>{`
      .footer {
        background: url('assets/img/bg/footer2-bg.png') no-repeat center center;
        background-size: cover;
        color: white;
        padding: 50px 0;
        font-family: Arial, sans-serif;
      }

      .footer .footer-top-shape {
        background: url('assets/img/bg/jiji-bg.png') repeat;
        height: 50px;
      }

      .widget-area {
        padding: 50px 0;
      }

      .footer-widget {
        margin-bottom: 30px;
      }

      .about-logo img {
        width: 150px;
      }

      .about-text {
        margin: 20px 0;
        line-height: 1.5;
        color: white;
      }

      .widget_title {
        font-size: 20px;
        margin-bottom: 15px;
        color: white;
      }

      .menu {
        list-style: none;
        padding: 0;
      }

      .menu li {
        margin-bottom: 10px;
      }

      .menu li a {
        color: white;
        text-decoration: none;
      }

      .menu li a i {
        margin-right: 5px;
      }

      .th-widget-contact .th-social a {
        display: inline-block;
        margin-right: 10px;
      }

      .th-widget-contact .th-social img,
      .th-widget-contact .th-social i {
        width: 24px;
        height: 24px;
        color: white;
      }

      .newsletter-widget .footer-text {
        margin-bottom: 15px;
        color: white;
      }

      .newsletter-form {
        display: flex;
      }

      .newsletter-form .form-control {
        flex: 1;
        padding: 10px;
        border: none;
        border-radius: 3px 0 0 3px;
      }

      .newsletter-form .th-btn {
        padding: 10px 15px;
        background: #00f5a0;
        border: none;
        border-radius: 0 3px 3px 0;
        cursor: pointer;
      }

      .copyright-wrap {
        background: url('assets/img/bg/jiji-bg.png') repeat;
        padding: 20px 0;
        text-align: center;
        color: white;
      }

      .copyright-text a {
        color: #00f5a0;
        text-decoration: none;
      }
    `}</style>

    <div className="container text-center">
      <div className="footer-top-shape"></div>
    </div>

    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-xl-auto">
            <div className="widget footer-widget">
              <div className="th-widget-about">
                <div className="about-logo">
                  <a href="index.html">
                    <img src="assets/img/logo.svg" alt="Bame" />
                  </a>
                </div>
                <p className="about-text">
                  StakeQuest Legends combines immersive gaming with blockchain technology, creating a revolutionary play-to-earn experience where every adventure matters.
                </p>
                <h3 className="widget_title">Follow <span className="text-theme">With Us:</span></h3>
                <div className="th-widget-contact">
                  <div className="th-social style-mask">
                    <a className="facebook" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    <a className="twitter" href="https://www.twitter.com/"><img src="assets/img/icon/x-twitter-icon.svg" alt="icon" /></a>
                    <a className="instagram" href="https://www.instagram.com/"><img src="assets/img/icon/instagram-icon.svg" alt="icon" /></a>
                    <a className="linkedin" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                    <a className="google-play" href="https://www.google.com/"><img src="assets/img/icon/google-playstore-icon.svg" alt="icon" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-auto">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Useful Link</h3>
              <ul className="menu">
                <li><a href="blog.html"><i className="far fa-angle-right"></i> Gaming</a></li>
                <li><a href="blog.html"><i className="far fa-angle-right"></i> Products</a></li>
                <li><a href="blog.html"><i className="far fa-angle-right"></i> All NFTs</a></li>
                <li><a href="blog.html"><i className="far fa-angle-right"></i> Domain Name</a></li>
                <li><a href="blog.html"><i className="far fa-angle-right"></i> Social Network</a></li>
                <li><a href="blog.html"><i className="far fa-angle-right"></i> Collectibles</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-xl-auto">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Supports</h3>
              <ul className="menu">
                <li><a href="contact.html"><i className="far fa-angle-right"></i> Help & Support</a></li>
                <li><a href="contact.html"><i className="far fa-angle-right"></i> Live Auctions</a></li>
                <li><a href="contact.html"><i className="far fa-angle-right"></i> 24/7 Supports</a></li>
                <li><a href="contact.html"><i className="far fa-angle-right"></i> Item Details</a></li>
                <li><a href="contact.html"><i className="far fa-angle-right"></i> Setting & Privacy</a></li>
                <li><a href="contact.html"><i className="far fa-angle-right"></i> Our News</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-xl-auto">
            <div className="widget newsletter-widget footer-widget">
              <h3 className="widget_title">Newsletter</h3>
              <p className="footer-text">
                Subscribe to our newsletter to get our latest update & news consenter
              </p>
              <form className="newsletter-form">
                <input className="form-control" type="email" placeholder="Email Address" required />
                <button type="submit" className="th-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright-wrap">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <p className="copyright-text">
              <i className="fal fa-copyright"></i> Copyright 2025 <a href="index.html">StakeQuest.</a> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
