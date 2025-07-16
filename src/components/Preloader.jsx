import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader">
      {/* <button className="th-btn preloaderCls">CANCEL PRELOADER</button> */}
      <div className="preloader-inner">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Preloader;
