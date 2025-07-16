import React from 'react';

const Footer = () => (
  <footer className="footer">
    <style>{`
      .footer {
        background: url('assets/img/bg/footer2-bg.png') no-repeat center center;
        background-size: cover;
        color: white;
        padding: 0px 0 0;
        font-family: Arial, sans-serif;
        text-align: center;
        margin-top:-100px;
      }

      .footer .footer-top-shape {
        background: url('assets/img/bg/jiji-bg.png') repeat;
        height: 50px;
        margin-bottom: 50px;
      }

      .widget-area {
        padding: 0 0 50px;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
      }

      .footer-widget {
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .about-logo img {
        width: 150px;
        margin-bottom: 20px;
      }

      .about-text {
        margin: 20px 0;
        line-height: 1.6;
        color: white;
        max-width: 300px;
      }

      .widget_title {
        font-size: 20px;
        margin-bottom: 20px;
        color: white;
        position: relative;
        display: inline-block;
        padding-bottom: 10px;
      }

      .widget_title:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 50px;
        height: 2px;
        background: #00f5a0;
      }

      .menu {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .menu li {
        margin-bottom: 12px;
      }

      .menu li a {
        color: white;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
      }

      .menu li a:hover {
        color: #00f5a0;
        transform: translateX(5px);
      }

      .menu li a i {
        margin-right: 8px;
        color: #00f5a0;
      }

      .th-widget-contact .th-social {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 20px;
      }

      .th-widget-contact .th-social a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: rgba(255,255,255,0.1);
        border-radius: 50%;
        transition: all 0.3s ease;
      }

      .th-widget-contact .th-social a:hover {
        background: #00f5a0;
        transform: translateY(-3px);
      }

      .th-widget-contact .th-social img,
      .th-widget-contact .th-social i {
        width: 18px;
        height: 18px;
        color: white;
      }

      .newsletter-widget .footer-text {
        margin-bottom: 20px;
        color: white;
        max-width: 300px;
        line-height: 1.6;
      }

      .newsletter-form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #7f00ff; /* violet background */
  padding: 15px;
  border-radius: 8px;
}

.newsletter-form .form-control {
  flex: 1;
  min-width: 200px;
  padding: 10px;
  border: none;
  border-radius: 4px 0 0 4px;
}

.newsletter-form .th-btn {
  padding: 10px 15px;
  background: #00f5a0;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  color: #000; /* button icon color */
}


      .newsletter-form .th-btn:hover {
        background: #00c47e;
      }

      .copyright-wrap {
        background: url('assets/img/bg/jiji-bg.png') repeat;
        padding: 20px 0;
        text-align: center;
        color: white;
        border-top: 1px solid rgba(255,255,255,0.1);
      }

      .copyright-text {
        margin: 0;
      }

      .copyright-text a {
        color: #00f5a0;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .copyright-text a:hover {
        text-decoration: underline;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
      }

      .col-md-6 {
        flex: 0 0 calc(50% - 30px);
        max-width: calc(50% - 30px);
      }

      .col-xl-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
      }

      @media (min-width: 992px) {
        .col-md-6 {
          flex: 0 0 calc(25% - 30px);
          max-width: calc(25% - 30px);
        }
      }

      @media (max-width: 768px) {
        .col-md-6 {
          flex: 0 0 100%;
          max-width: 100%;
        }
        
        .footer-widget {
          margin-bottom: 30px;
        }
      }
    `}</style>

   

    <div className="widget-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-auto">
            <div className="widget footer-widget">
              <div className="th-widget-about">
                <div className="about-logo">
                  <a href="index.html">
                    <img src="assets/img/logo.svg" alt="StakeQuest" />
                  </a>
                </div>
                <p className="about-text">
                  StakeQuest Legends combines immersive gaming with blockchain technology, creating a revolutionary play-to-earn experience where every adventure matters.
                </p>
                <h3 className="widget_title">Follow <span className="text-theme">With Us:</span></h3>
                <div className="th-widget-contact">
                  <div className="th-social">
                    <a className="facebook" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    <a className="twitter" href="https://www.twitter.com/"><img src="assets/img/icon/x-twitter-icon.svg" alt="Twitter" /></a>
                    <a className="instagram" href="https://www.instagram.com/"><img src="assets/img/icon/instagram-icon.svg" alt="Instagram" /></a>
                    <a className="linkedin" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="google-play" href="https://www.google.com/"><img src="assets/img/icon/google-playstore-icon.svg" alt="Play Store" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-auto">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Useful Links</h3>
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
        <p className="copyright-text">
          <i className="fal fa-copyright"></i> Copyright 2025 <a href="index.html">StakeQuest</a>. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;