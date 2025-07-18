import { useState } from "react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      {/* Internal CSS */}
      <style>{`
        /* Main header styles */
        .header-container {
          position: relative;
          z-index: 100;
          position: sticky;  /* <-- make it sticky! */
          top: 0;            /* <-- stick to the top */
        }


        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          color: #fff;
          position: relative;
          z-index: 100;
          box-shadow: 0 2px 20px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        /* Gaming border animation */
        .gaming-border {
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, 
            #7f00ff 0%, 
            #ff00ff 20%, 
            #00ffff 40%, 
            #00ff7f 60%, 
            #ffff00 80%, 
            #7f00ff 100%);
          background-size: 200% 100%;
          animation: borderFlow 3s linear infinite;
          z-index: 99;
          box-shadow: 0 0 15px rgba(127, 0, 255, 0.5);
        }

        @keyframes borderFlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        /* Pixel animation effect */
        .pixel-effect {
          position: absolute;
          bottom: -10px;
          left: 0;
          right: 0;
          height: 10px;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 5px,
            rgba(127, 0, 255, 0.3) 5px,
            rgba(127, 0, 255, 0.3) 10px
          );
          z-index: 98;
          opacity: 0.7;
        }

        /* Glitch effect on hover */
        header:hover .gaming-border {
          animation: borderFlow 3s linear infinite, glitch 0.5s linear infinite;
        }

        @keyframes glitch {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-2px);
          }
          40% {
            transform: translateX(2px);
          }
          60% {
            transform: translateX(-1px);
          }
          80% {
            transform: translateX(1px);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Rest of your existing CSS remains the same */
        header .logo {
          transform: scale(1);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        header .logo:hover {
          transform: scale(1.05);
        }

        header .logo img {
          width: 175px;
          filter: drop-shadow(0 0 10px rgba(127, 0, 255, 0.3));
          transition: filter 0.3s ease;
        }

        header .logo img:hover {
          filter: drop-shadow(0 0 15px rgba(127, 0, 255, 0.5));
        }

        /* Desktop menu styles */
        .desktop-menu {
          display: none;
        }

        /* Hamburger button styles */
        .hamburger {
          width: 32px;
          height: 26px;
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 2000;
          transform: scale(1);
          transition: transform 0.2s ease;
        }

        .hamburger:hover {
          transform: scale(1.1);
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: linear-gradient(45deg, #7f00ff, #ff00ff);
          border-radius: 3px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 8px rgba(127, 0, 255, 0.4);
        }

        .hamburger span:nth-child(1) {
          top: 0;
        }

        .hamburger span:nth-child(2),
        .hamburger span:nth-child(3) {
          top: 11px;
        }

        .hamburger span:nth-child(4) {
          top: 22px;
        }

        /* Hamburger animation when drawer is open */
        .hamburger.open span:nth-child(1) {
          top: 11px;
          width: 0%;
          left: 50%;
        }

        .hamburger.open span:nth-child(2) {
          transform: rotate(45deg);
          background: linear-gradient(45deg, #ff4757, #ff3742);
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg);
          background: linear-gradient(45deg, #ff4757, #ff3742);
        }

        .hamburger.open span:nth-child(4) {
          top: 11px;
          width: 0%;
          left: 50%;
        }

        /* Mobile dropdown menu styles */
        .drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
          backdrop-filter: blur(15px);
          border-top: 1px solid rgba(127, 0, 255, 0.3);
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1500;
          overflow: hidden;
        }

        .drawer.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .drawer ul {
          list-style: none;
          padding: 1rem 1.5rem; /* Reduced padding */
          margin: 0;
        }

        .drawer li {
          margin: 0;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .drawer li:last-child {
          border-bottom: none;
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
          font-size: 0.95rem; /* Reduced from 1.1rem */
          font-weight: 500;
          display: block;
          padding: 0.8rem 0; /* Reduced from 1rem */
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .drawer a::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(127, 0, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .drawer a:hover::before {
          left: 100%;
        }

        .drawer a:hover {
          color: #7f00ff;
          transform: translateX(8px); /* Reduced from 10px */
        }

        /* Backdrop styles */
       

        /* Desktop menu for large screens */
        @media(min-width: 768px) {
          .desktop-menu {
            display: block;
          }
          
          .desktop-menu ul {
            display: flex;
            gap: 2rem;
            list-style: none;
            align-items: center;
          }
          
          .desktop-menu a {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            position: relative;
            padding: 0.5rem 0;
          }

          .desktop-menu a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(45deg, #7f00ff, #ff00ff);
            transition: width 0.3s ease;
          }

          .desktop-menu a:hover::after {
            width: 100%;
          }
          
          .desktop-menu a:hover {
            color: #7f00ff;
            transform: translateY(-2px);
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

        /* Connect Wallet button style for both desktop and drawer */
        .btn-connect {
          display: inline-block;
          padding: 0.6rem 1.2rem; /* Reduced padding */
          background: linear-gradient(45deg, #7f00ff, #ff00ff);
          color: #fff !important;
          border-radius: 25px;
          font-weight: 600;
          width: 180px; /* Reduced width */
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(127, 0, 255, 0.3);
          font-size: 0.9rem; /* Reduced font size */
          margin: 0.5rem 0; /* Adjusted margin */
        }

        .btn-connect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #ff00ff, #7f00ff);
          transition: left 0.5s ease;
          z-index: -1;
        }

        .btn-connect:hover::before {
          left: 0;
        }

        .btn-connect:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(127, 0, 255, 0.4);
          color: #fff;
        }

        /* Mobile specific adjustments */
        @media(max-width: 767px) {
          header {
            padding: 1rem 1.5rem;
          }
          
          .drawer {
            border-radius: 0 0 15px 15px;
          }
          
          .drawer ul {
            padding: 0.8rem 1.2rem; /* Reduced padding */
          }
          
          .drawer a {
            font-size: 0.9rem; /* Reduced font size */
            padding: 0.7rem 0; /* Reduced padding */
          }
          
          .btn-connect {
            padding: 0.7rem 1rem; /* Reduced padding */
            font-size: 0.85rem; /* Reduced font size */
            width: 160px; /* Reduced width */
          }
        }

        /* Additional animations */
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(127, 0, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(127, 0, 255, 0.6);
          }
          100% {
            box-shadow: 0 0 5px rgba(127, 0, 255, 0.3);
          }
        }

        .hamburger:hover span {
          animation: glow 2s infinite;
        }

        /* Smooth page transitions */
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

      `}</style>

      {/* Header Container with Gaming Border */}
      <div className="header-container">
        <header>
          <div className="logo">
            <a href="/">
              <img src="assets/img/logo.svg" alt="Logo" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-menu">
            <ul>
             <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="https://docs.stakequestlegends.com/" target="_blank">Gitbook</a></li>
                <li><a href="/connectwallet">Staking</a></li>
                <li><a href="/connectwallet">Games</a></li>
                <li><a href="/roadmap">Roadmap</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/team_members">Team</a></li>
              <li>
                <a href="/connectwallet" className="btn-connect">
                  Connect Wallet
                </a>
              </li>
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

          {/* Mobile Dropdown Menu */}
          <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
            <ul>
                            <li><a href="/" onClick={toggleDrawer}>Home</a></li>
              <li><a href="/about" onClick={toggleDrawer}>About</a></li>
              <li><a href="https://docs.stakequestlegends.com/" target="_blank" onClick={toggleDrawer}>Gitbook</a></li>
              <li><a href="/connectwallet" onClick={toggleDrawer}>Staking</a></li>
              <li><a href="/connectwallet" onClick={toggleDrawer}>Games</a></li>
              <li><a href="/connectwallet" onClick={toggleDrawer}>Roadmap</a></li>
              <li><a href="/contact" onClick={toggleDrawer}>Contact</a></li>
              <li><a href="/team_members" onClick={toggleDrawer}>Team</a></li>

              <li>
                <a href="/connectwallet" className="btn-connect" onClick={toggleDrawer}>
                  Connect Wallet
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* Gaming Border Animation */}
        <div className="gaming-border"></div>
        <div className="pixel-effect"></div>
      </div>

      {/* Backdrop */}
      <div className={`backdrop ${isDrawerOpen ? "active" : ""}`} onClick={toggleDrawer}></div>
    </>
  );
}