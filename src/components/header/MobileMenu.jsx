const MobileMenu = ({ onClose }) => {
    return (
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" onClick={onClose}>
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <span data-mask-src="assets/img/logo.svg" className="logo-mask"></span>
              <img src="assets/img/logo.svg" alt="Bame" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              {/* Menu items here */}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default MobileMenu;