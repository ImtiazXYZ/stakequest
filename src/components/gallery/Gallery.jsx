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
        .gallery-area {
          overflow: hidden;
          position: relative;
          padding: 50px 0;
        }

        .gallery-track {
          display: flex;
          gap: 30px;
          animation: scroll 40s linear infinite;
          width: max-content;
        }

        .gallery-item {
          flex: 0 0 auto;
          width: 300px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.05);
        }

        .gallery-item img {
          width: 100%;
          display: block;
          border-radius: 10px;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          transition: opacity 0.3s ease;
        }

        .overlay img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 10px;
          box-shadow: 0 0 20px #000;
        }
      `}</style>

      <div className="gallery-area text-center">
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

      {activeImg && (
        <div className="overlay" onClick={closeImage}>
          <img src={activeImg} alt="Zoomed" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
