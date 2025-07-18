import React from 'react';

const Footer = () => (
  <footer className="footer">
    <style>{`
      .footer {
        background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
        color: white;
        padding: 80px 0 0;
        text-align: center;
        font-family: 'Arial', sans-serif;
        position: relative;
        overflow: hidden;
      }

      .footer::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('assets/img/bg/footerbg.jpg') repeat;
        opacity: 0.05;
        z-index: 0;
      }

      .container {
        position: relative;
        z-index: 1;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
      }

      /* Newsletter Section */
      .newsletter-box {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 40px;
        margin: 0 auto 60px;
        max-width: 800px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        position: relative;
        overflow: hidden;
      }

      .newsletter-box::before {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,0,128,0.2) 0%, rgba(255,0,128,0) 70%);
        z-index: -1;
      }

      .newsletter-title {
        font-size: 2.2rem;
        margin-bottom: 15px;
        background: linear-gradient(90deg, #ff007f, #ff8a00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
      }

      .newsletter-subtitle {
        font-size: 1.1rem;
        margin-bottom: 30px;
        color: rgba(255, 255, 255, 0.8);
        letter-spacing: 1px;
      }

      .newsletter-form {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        max-width: 600px;
        margin: 0 auto;
      }

      .newsletter-input {
        flex: 1;
        min-width: 250px;
        padding: 18px 25px;
        border: none;
        border-radius: 50px;
        background: rgba(0, 0, 0, 0.3);
        color: white;
        font-size: 1rem;
        outline: none;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
      }

      .newsletter-input:focus {
        border-color: #ff007f;
        box-shadow: 0 0 0 3px rgba(255, 0, 127, 0.2);
      }

      .newsletter-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }

      .subscribe-btn {
        padding: 18px 40px;
        background: linear-gradient(90deg, #ff007f, #ff8a00);
        border: none;
        border-radius: 50px;
        color: white;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(255, 0, 127, 0.3);
      }

      .subscribe-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 0, 127, 0.4);
      }

      /* Footer Menu */
      .footer-menu {
        margin: 40px 0;
      }

      .footer-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .footer-nav a {
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 500;
        padding: 8px 15px;
        border-radius: 8px;
        transition: all 0.3s ease;
        position: relative;
      }

      .footer-nav a:hover {
        color: #ff007f;
        background: rgba(255, 255, 255, 0.05);
      }

      .footer-nav a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: #ff007f;
        transition: all 0.3s ease;
      }

      .footer-nav a:hover::after {
        width: 100%;
        left: 0;
      }

      /* Copyright */
      .copyright {
        padding: 25px 0;
        background: rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        margin-top: 40px;
      }

      .copyright-text {
        margin: 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
      }

      .copyright-text a {
        color: #ff007f;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .copyright-text a:hover {
        text-decoration: underline;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .newsletter-box {
          padding: 30px 20px;
          margin-bottom: 40px;
        }

        .newsletter-title {
          font-size: 1.8rem;
        }

        .newsletter-form {
          flex-direction: column;
          gap: 10px;
        }

        .newsletter-input,
        .subscribe-btn {
          width: 100%;
        }

        .footer-nav {
          gap: 15px;
        }

        .footer-nav a {
          font-size: 1rem;
          padding: 6px 12px;
        }
      }
    `}</style>

    <div className="container">
      {/* Newsletter Section */}
      <div className="newsletter-box">
        <h2 className="newsletter-title">Subscribe to Stakequest</h2>
        <p className="newsletter-subtitle">TO GET EXCLUSIVE BENEFITS</p>
        <form className="newsletter-form">
          <input 
            type="email" 
            className="newsletter-input" 
            placeholder="Your Email Address" 
            required 
          />
          <button type="submit" className="subscribe-btn">
            SUBSCRIBE NOW
          </button>
        </form>
      </div>

      {/* Footer Menu */}
      <div className="footer-menu">
        <ul className="footer-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="https://docs.stakequestlegends.com/" target="_blank" rel="noopener noreferrer">Gitbook</a></li>
          <li><a href="/staking">Staking</a></li>
          <li><a href="/games">Games</a></li>
          <li><a href="/roadmap">Roadmap</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/team">Team</a></li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="copyright">
      <div className="container">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} <a href="/">StakeQuest</a>. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;