import { color } from "framer-motion";
import React, { useEffect, useRef } from "react";

const styles = {
  breadcumbWrapper: {
    backgroundImage: `url('/assets/img/bg/breadcumb-bg.jpg')`,
    padding: "80px 0",
    color: "#fff",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  breadcumbMenu: {
    listStyle: "none",
    padding: 0,
    marginTop: 10,
    display: "inline-flex",
    gap: 10,
    color: "#ccc",
    fontSize: "0.9rem",
  },
  breadcumbLink: {
    color: "#ccc",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  breadcumbLinkHover: {
    color: "#fff",
  },
  aboutSection: {
    position: "relative",
    overflow: "hidden",
    padding: "80px 20px",
    backgroundColor: "#111",
    color: "#eee",
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(255,0,150,0.4) 0%, rgba(0,204,255,0.4) 100%)",
    zIndex: 0,
  },
  container: {
    position: "relative",
    maxWidth: 1200,
    margin: "0 auto",
    zIndex: 1,
  },
  titleArea: {
    textAlign: "center",
    marginBottom: 60,
   
  },
  subTitle: {
    color: "#ff0080",
    fontWeight: "bold",
    fontSize: "1.1rem",
    letterSpacing: 2,
    display: "block",
    marginBottom: 12,
  },
  secTitle: {
    fontSize: "2.8rem",
    fontWeight: "700",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: 40,
    justifyContent: "center",
  },
  colImage: {
    flex: "1 1 45%",
    minWidth: 300,
    opacity: 0,
    transform: "translateX(-50px)",
    animation: "fadeInLeft 1s forwards",
  },
  colContent: {
    flex: "1 1 40%",
    minWidth: 300,
    opacity: 0,
    transform: "translateX(50px)",
    animation: "fadeInRight 1s forwards",
  },
  imgBox: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 12,
  },
  img: {
    width: "100%",
    display: "block",
    transition: "transform 0.5s ease",
  },
  imgHover: {
    transform: "scale(1.05)",
  },
  aboutFeature: {
    backgroundColor: "#222",
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    display: "flex",
    gap: 15,
    alignItems: "center",
    boxShadow: "0 0 10px rgba(255,0,150,0.3)",
    transition: "all 0.3s ease",
    opacity: 0,
    transform: "translateY(30px)",
  },
  aboutFeatureHover: {
    transform: "scale(1.05)",
    boxShadow: "0 0 15px #ff00aa",
  },
  aboutFeatureIcon: {
    width: 64,
    height: 64,
    flexShrink: 0,
  },
  aboutFeatureImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  aboutFeatureContent: {
    color: "#eee",
  },
  aboutFeatureTitle: {
    margin: 0,
    color: "#ff0080",
    fontWeight: "600",
    fontSize: "1.2rem",
    marginBottom: 6,
  },
  aboutFeatureText: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#bbb",
  },
  breadcumbTitle: {
    opacity: 0,
    transform: "translateY(-20px)",
    animation: "fadeInDown 0.7s forwards",
    marginTop: "30px",
  },
  titleAnimation: {
    opacity: 0,
    transform: "translateY(20px)",
    animation: "fadeInUp 0.8s 0.2s forwards",
  },
};

const features = [
  {
    title: "Live Streaming",
    text: "Integration with popular streaming platforms for live coverage of esports.",
    icon: "/assets/img/icon/about_feature_2_1.svg",
  },
  {
    title: "Gaming News",
    text: "Keep users informed about the gaming industry with news articles.",
    icon: "/assets/img/icon/about_feature_2_2.svg",
  },
  {
    title: "Great Tournament",
    text: "Display a calendar of upcoming tournament with dates, times, and game.",
    icon: "/assets/img/icon/about_feature_2_3.svg",
  },
  {
    title: "Live Streaming",
    text: "Integration with popular streaming platforms for live coverage of esports.",
    icon: "/assets/img/icon/about_feature_2_1.svg",
  },
  {
    title: "Gaming News",
    text: "Keep users informed about the gaming industry with news articles.",
    icon: "/assets/img/icon/about_feature_2_2.svg",
  },
  {
    title: "Great Tournament",
    text: "Display a calendar of upcoming tournament with dates, times, and game.",
    icon: "/assets/img/icon/about_feature_2_3.svg",
  },
];

// CSS animation keyframes
const animationStyles = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .feature-item {
    animation: fadeInUp 0.5s forwards;
  }
`;

export default function About() {
  const featureRefs = useRef([]);

  useEffect(() => {
    // Add animation delays to feature items
    featureRefs.current.forEach((el, idx) => {
      if (el) {
        el.style.animationDelay = `${idx * 0.15}s`;
        el.classList.add('feature-item');
      }
    });
  }, []);

  return (
    <>
      <style>{animationStyles}</style>
      
      {/* Breadcumb */}
      <div style={styles.breadcumbWrapper}>
        <div style={styles.container}>
          <div>
            <h1 style={styles.breadcumbTitle} className="breadcumb-title">About Us</h1>
            <ul style={styles.breadcumbMenu}>
              <li>
                <a 
                  href="/" 
                  style={styles.breadcumbLink}
                  onMouseEnter={(e) => e.target.style.color = "#fff"}
                  onMouseLeave={(e) => e.target.style.color = "#ccc"}
                >
                  Home
                </a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <div style={styles.overlay} />
        <div style={styles.container}>
          <div style={styles.titleArea}>
            <span style={styles.subTitle}># Welcome to The eSports & Gaming Site</span>
            <h2 style={{...styles.secTitle, ...styles.titleAnimation}}>
              Forging Legends in the Gaming Universe
            </h2>
          </div>
          <div style={styles.row}>
            <div style={styles.colImage}>
              <div style={styles.imgBox}>
                <img
                  src="/assets/img/normal/about2-1.png"
                  alt="About"
                  style={styles.img}
                  loading="lazy"
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                />
              </div>
            </div>

            <div style={styles.colContent}>
              {features.map(({ title, text, icon }, idx) => (
                <div
                  style={styles.aboutFeature}
                  key={idx}
                  ref={el => featureRefs.current[idx] = el}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 0 15px #ff00aa";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 0 10px rgba(255,0,150,0.3)";
                  }}
                >
                  <div style={styles.aboutFeatureIcon}>
                    <img src={icon} alt={title} style={styles.aboutFeatureImg} />
                  </div>
                  <div style={styles.aboutFeatureContent}>
                    <h3 style={styles.aboutFeatureTitle}>{title}</h3>
                    <p style={styles.aboutFeatureText}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}