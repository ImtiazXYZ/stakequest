import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="th-header header-layout1">
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <a href="index.html">
                    <img src="assets/img/logo.svg" alt="Bame" />
                  </a>
                </div>
              </div>
              
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/tournament">Tournament</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                   
                     <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/players">Players</Link></li>
                        <li><Link to="/gamepage">Games</Link></li>
                        <li><Link to="/point-table">Point Table</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>

                  </ul>
                </nav>
                
                <div className="header-button d-flex d-lg-none">
                  <button 
                    type="button" 
                    className="th-menu-toggle"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="btn-border"></span>
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
              
              <div className="col-auto d-none d-xl-block">
                <div className="header-button">
                  <button 
                    type="button" 
                    className="simple-icon searchBoxToggler"
                    onClick={() => setSearchOpen(true)}
                  >
                    <i className="far fa-search"></i>
                  </button>
                  <button type="button" className="simple-icon sideMenuInfo">
                    <i className="fa-solid fa-bars"></i>
                  </button>
                  <div className="d-xxl-block d-none">
                    <a href="contact.html" className="th-btn">
                      <i className="fa-brands fa-twitch me-1"></i> Connect Wallet
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-bg"></div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
      
      {searchOpen && (
        <div className="popup-search-box d-none d-lg-block">
          <button className="searchClose" onClick={() => setSearchOpen(false)}>
            <i className="fal fa-times"></i>
          </button>
          <form action="#">
            <input type="text" placeholder="What are you looking for?" />
            <button type="submit"><i className="fal fa-search"></i></button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;