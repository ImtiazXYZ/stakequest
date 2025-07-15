import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const styles = {
  section: {
    overflow: "hidden",
    padding: "60px 0",
    backgroundColor: "#111",
  },
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: 0,
  },
  clientCard: {
    display: "block",
    padding: "20px",
    transition: "transform 0.3s ease",
  },
  clientImage: {
    width: "100%",
    height: "auto",
    display: "block",
    filter: "grayscale(100%)",
    transition: "filter 0.3s ease",
  },
};

const clientImages = [
  "/assets/img/client/1-1.png",
  "/assets/img/client/1-2.png",
  "/assets/img/client/1-3.png",
  "/assets/img/client/1-4.png",
  "/assets/img/client/1-5.png",
  "/assets/img/client/1-6.png",
  "/assets/img/client/1-7.png",
  "/assets/img/client/1-8.png",
  "/assets/img/client/1-9.png",
  // Add more if needed
];

export default function ClientSlider() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <Swiper
          loop={true}
          spaceBetween={0}
          breakpoints={{
            0: { slidesPerView: 2 },
            400: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 7 },
            1300: { slidesPerView: 9 },
          }}
          autoplay={{ delay: 2000 }}
        >
          {clientImages.map((imgSrc, idx) => (
            <SwiperSlide key={idx}>
              <a href="#" style={styles.clientCard}>
                <img
                  src={imgSrc}
                  alt={`Client ${idx + 1}`}
                  style={styles.clientImage}
                  onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                  onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
