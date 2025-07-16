import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      {/* Internal CSS */}
      <style>{`
        /* Main header styles */
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #111;
          color: #fff;
          position: relative;
          z-index: 100;
        }

        header .logo img {
          width: 120px;
        }

        .desktop-menu {
          display: none;
        }

        /* Hamburger button styles */
        .hamburger {
          width: 30px;
          height: 24px;
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 2000;
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: #fff;
          border-radius: 3px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: all 0.3s ease;
        }

        .hamburger span:nth-child(1) {
          top: 0;
        }

        .hamburger span:nth-child(2),
        .hamburger span:nth-child(3) {
          top: 10px;
        }

        .hamburger span:nth-child(4) {
          top: 20px;
        }

        /* Hamburger animation when drawer is open */
        .hamburger.open span:nth-child(1) {
          top: 10px;
          width: 0%;
          left: 50%;
        }

        .hamburger.open span:nth-child(2) {
          transform: rotate(45deg);
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg);
        }

        .hamburger.open span:nth-child(4) {
          top: 10px;
          width: 0%;
          left: 50%;
        }

        /* Drawer styles */
        .drawer {
          position: fixed;
          top: 0;
          right: -100%;
          height: 100vh;
          width: 85%;
          max-width: 320px;
          background: #111;
          color: #fff;
          box-shadow: -2px 0 15px rgba(0,0,0,0.3);
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1500;
          padding: 2rem;
          overflow-y: auto;
        }

        .drawer.open {
          right: 0;
        }

        .drawer ul {
          list-style: none;
          padding: 0;
          margin-top: 3rem;
        }

        .drawer li {
          margin: 1.5rem 0;
          opacity: 0;
          transform: translateX(20px);
          transition: all 0.3s ease;
        }

        .drawer.open li {
          opacity: 1;
          transform: translateX(0);
        }

        /* Staggered animation for menu items */
        .drawer.open li:nth-child(1) { transition-delay: 0.1s; }
        .drawer.open li:nth-child(2) { transition-delay: 0.15s; }
        .drawer.open li:nth-child(3) { transition-delay: 0.2s; }
        .drawer.open li:nth-child(4) { transition-delay: 0.25s; }
        .drawer.open li:nth-child(5) { transition-delay: 0.3s; }
        .drawer.open li:nth-child(6) { transition-delay: 0.35s; }

        .drawer a {
          text-decoration: none;
          color: #fff;
          font-size: 1.2rem;
          font-weight: 500;
          display: block;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
        }

        .drawer a:hover {
          color: #ccc;
        }

        .close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: #fff;
          font-size: 1.8rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        /* Backdrop styles */
        .backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          z-index: 1200;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .backdrop.active {
          opacity: 1;
          visibility: visible;
        }

        /* Desktop menu for large screens */
        @media(min-width: 768px) {
          .desktop-menu {
            display: block;
          }
          
          .desktop-menu ul {
            display: flex;
            gap: 1.5rem;
            list-style: none;
          }
          
          .desktop-menu a {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
          }
          
          .desktop-menu a:hover {
            color: #ccc;
          }
          
          .hamburger {
            display: none;
          }
          
          .drawer {
            display: none;
          }
          
          .backdrop {
            display: none !important;
          }
        }
      `}</style>

      {/* Header */}
      <header>
        <div className="logo">
          <Link to="/">
            <img src="assets/img/logo.svg" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tournament">Tournament</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
             <li><Link to="/team_members">Team Members</Link></li>
           <li><Link to="/connectwallet">Connect Wallet</Link></li>

          </ul>
        </nav>

        {/* Mobile Toggle - Animated Hamburger */}
        <button 
          className={`hamburger ${isDrawerOpen ? "open" : ""}`} 
          onClick={toggleDrawer}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Drawer */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleDrawer} aria-label="Close menu">
          &times;
        </button>
        <ul>
          <li><Link to="/" onClick={toggleDrawer}>Home</Link></li>
          <li><Link to="/about" onClick={toggleDrawer}>About</Link></li>
          <li><Link to="/tournament" onClick={toggleDrawer}>Tournament</Link></li>
          <li><Link to="/blog" onClick={toggleDrawer}>Blog</Link></li>
          <li><Link to="/shop" onClick={toggleDrawer}>Shop</Link></li>
          <li><Link to="/contact" onClick={toggleDrawer}>Contact</Link></li>
          <li><Link to="/team_members" onClick={toggleDrawer}>Team Members</Link></li>

          <li><Link to="/connectwallet" onClick={toggleDrawer}>Connect Wallet</Link></li>

        </ul>
      </div>

      {/* Backdrop */}
      <div className={`backdrop ${isDrawerOpen ? "active" : ""}`} onClick={toggleDrawer}></div>
    </>
  );
}