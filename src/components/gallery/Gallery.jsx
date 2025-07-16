import React, { useState } from "react";

const Gallery = () => {
  const [activeImg, setActiveImg] = useState(null);

  const images = [
    "/assets/img/video/1-1.png",
    "/assets/img/video/1-2.png",
    "/assets/img/video/1-3.png",
    "/assets/img/video/1-1.png",
    "/assets/img/video/1-2.png",
    "/assets/img/video/1-3.png",
  ];

  const openImage = (src) => {
    setActiveImg(src);
  };

  const closeImage = () => {
    setActiveImg(null);
  };

  return (
    <div className="container-fluid p-0">
      <style>{`
        .gallery-section {
          background: #000000ff;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .gallery-title {
          font-size: 3rem;
          font-weight: 700;
          color: #e137e4ff;
          margin-bottom: 50px;
          position: relative;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .gallery-title:after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -15px;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #00f5a0, #00d9f5);
          border-radius: 2px;
        }

        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .gallery-track {
          display: flex;
          gap: 30px;
          animation: scroll 40s linear infinite;
          width: max-content;
          padding: 20px 0;
        }

        .gallery-item {
          flex: 0 0 auto;
          width: 300px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          transition: all 0.4s ease;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .gallery-item:hover {
          transform: scale(1.05) translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }

        .gallery-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          border-radius: 15px;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 0;
          animation: fadeIn 0.3s forwards;
        }

        .overlay img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 10px;
          box-shadow: 0 0 40px rgba(0, 245, 160, 0.3);
          transform: scale(0.9);
          animation: zoomIn 0.3s 0.1s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          to { transform: scale(1); }
        }

        .close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          background: rgba(255,255,255,0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: #00f5a0;
          transform: rotate(90deg);
        }

        @media (max-width: 768px) {
          .gallery-title {
            font-size: 2rem;
            margin-bottom: 30px;
          }
          
          .gallery-item {
            width: 250px;
          }
        }
      `}</style>

      <div className="gallery-section">
        <div className="gallery-container text-center">
          <h2 className="gallery-title">Gallery</h2>
          <div className="gallery-track">
            {images.map((src, index) => (
              <div
                className="gallery-item"
                key={index}
                onClick={() => openImage(src)}
              >
                <img src={src} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeImg && (
        <div className="overlay" onClick={closeImage}>
          <span className="close-btn">&times;</span>
          <img src={activeImg} alt="Zoomed" />
        </div>
      )}
    </div>
  );
};

export default Gallery;