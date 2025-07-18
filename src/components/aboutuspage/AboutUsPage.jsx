import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [counters, setCounters] = useState({
    dailyUsers: 0,
    downloads: 0,
    gamesLaunched: 0,
    projectsDelivered: 0
  });

  const featureRefs = useRef([]);
  const counterRefs = useRef([]);

  // Styles object
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
    breadcumbTitle: {
      opacity: 0,
      transform: "translateY(-20px)",
      animation: "fadeInDown 0.7s forwards",
      marginTop: "30px",
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
      background: "linear-gradient(135deg, rgba(255,0,150,0.4) 0%, rgba(0,204,255,0.4) 100%)",
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
    titleAnimation: {
      opacity: 0,
      transform: "translateY(20px)",
      animation: "fadeInUp 0.8s 0.2s forwards",
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
    counterSection: {
      backgroundColor: '#0f0f0f',
      padding: '80px 20px',
      position: 'relative',
    },
    counterCardWrap: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    counterCard: {
      flex: '1 1 200px',
      minWidth: '200px',
      textAlign: 'center',
      padding: '30px 20px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,0,150,0.2)',
      transition: 'all 0.3s ease',
      opacity: 0,
      transform: 'translateY(30px)',
    },
    boxNumber: {
      fontSize: '3rem',
      fontWeight: '700',
      margin: '0 0 10px',
      background: 'linear-gradient(90deg, #ff0080, #00ccff)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    },
    textTheme: {
      color: '#ff0080',
      fontWeight: '600',
    },
    boxText: {
      margin: 0,
      color: '#bbb',
      fontSize: '1rem',
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
  ];

  useEffect(() => {
    // Feature animations
    featureRefs.current.forEach((el, idx) => {
      if (el) {
        el.style.animationDelay = `${idx * 0.15}s`;
        el.style.animation = "fadeInUp 0.5s forwards";
      }
    });

    // Counter animations
    counterRefs.current.forEach((el, idx) => {
      if (el) {
        el.style.animationDelay = `${idx * 0.2 + 0.3}s`;
        el.style.animation = "fadeInUp 0.5s forwards";
      }
    });

    // Counter values animation
    const duration = 2000;
    const startTime = Date.now();
    const targetValues = {
      dailyUsers: 1.6,
      downloads: 50,
      gamesLaunched: 200,
      projectsDelivered: 3.6
    };

    const animateCounters = () => {
      const progress = Math.min(1, (Date.now() - startTime) / duration);
      
      setCounters({
        dailyUsers: parseFloat((progress * targetValues.dailyUsers).toFixed(1)),
        downloads: Math.floor(progress * targetValues.downloads),
        gamesLaunched: Math.floor(progress * targetValues.gamesLaunched),
        projectsDelivered: parseFloat((progress * targetValues.projectsDelivered).toFixed(1))
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    animateCounters();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>

      {/* Breadcrumb Section */}
      <div style={styles.breadcumbWrapper}>
        <div style={styles.container}>
          <div>
            <h1 style={styles.breadcumbTitle}>About Us</h1>
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

      {/* Main About Section */}
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
                    e.currentTarget.style.transform = "scale(1.05) translateY(0)";
                    e.currentTarget.style.boxShadow = "0 0 15px #ff00aa";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
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

      {/* Counter Section */}
      <section style={styles.counterSection}>
        <div style={styles.counterCardWrap}>
          <div 
            style={styles.counterCard}
            ref={el => counterRefs.current[0] = el}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div>
              <h2 style={styles.boxNumber}>
                {counters.dailyUsers}K<span style={styles.textTheme}>+</span>
              </h2>
              <p style={styles.boxText}>Our Daily Game Users</p>
            </div>
          </div>
          <div 
            style={styles.counterCard}
            ref={el => counterRefs.current[1] = el}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div>
              <h2 style={styles.boxNumber}>{counters.downloads}M</h2>
              <p style={styles.boxText}>Game Downloads</p>
            </div>
          </div>
          <div 
            style={styles.counterCard}
            ref={el => counterRefs.current[2] = el}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div>
              <h2 style={styles.boxNumber}>
                {counters.gamesLaunched}<span style={styles.textTheme}>+</span>
              </h2>
              <p style={styles.boxText}>Game Launched</p>
            </div>
          </div>
          <div 
            style={styles.counterCard}
            ref={el => counterRefs.current[3] = el}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div>
              <h2 style={styles.boxNumber}>{counters.projectsDelivered}M</h2>
              <p style={styles.boxText}>Gaming Project Delivered</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;