
import { Link } from 'react-router-dom';

const MobileMenu = ({ onClose }) => {
  return (
    
    <div className="th-menu-wrapper">
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle" onClick={onClose}>
          <i className="fal fa-times"></i>
        </button>
        <div className="mobile-logo">
          <a href="/">
            <img src="assets/img/logo.svg" alt="Bame" />
          </a>
        </div>
        <div className="th-mobile-menu">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/tournament">Tournament</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
            <li className="menu-item-has-children">
              <span>Pages</span>
              <ul className="sub-menu">
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/players">Players</Link></li>
                <li><Link to="/gamepage">Games</Link></li>
                <li><Link to="/point-table">Point Table</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

  
  export default MobileMenu;