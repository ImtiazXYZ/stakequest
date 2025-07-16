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
  teamSection: {
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
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "30px",
    padding: "20px 0",
  },
  teamCard: {
    backgroundColor: "#222",
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative",
    transition: "all 0.3s ease",
    boxShadow: "0 0 10px rgba(255,0,150,0.3)",
    opacity: 0,
    transform: "translateY(30px)",
  },
  teamCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 0 15px #ff00aa",
  },
  teamImgWrapper: {
    position: "relative",
    overflow: "hidden",
    height: "320px",
  },
  teamImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  teamImgHover: {
    transform: "scale(1.1)",
  },
  gameLogo: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    width: "60px",
    height: "60px",
    objectFit: "contain",
    zIndex: 2,
    backgroundColor: "#111",
    borderRadius: "50%",
    padding: "5px",
    border: "2px solid #ff0080",
  },
  teamContent: {
    padding: "20px",
    textAlign: "center",
  },
  teamName: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "600",
    margin: "10px 0 5px",
  },
  teamRole: {
    color: "#ff0080",
    fontSize: "0.9rem",
    fontWeight: "500",
    marginBottom: "10px",
  },
  teamDesc: {
    color: "#bbb",
    fontSize: "0.9rem",
    lineHeight: "1.5",
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

const teamMembers = [
  {
    id: 1,
    name: "Max Alexis",
    role: "FPS Specialist",
    image: "/assets/img/team/1-1.png",
    gameLogo: "/assets/img/team/game-logo1-1.png",
    description: "Former professional esports player with 10+ years in competitive FPS titles. Specializes in tactical shooters and aim training."
  },
  {
    id: 2,
    name: "Wilium Lili",
    role: "MMORPG Strategist",
    image: "/assets/img/team/1-2.png",
    gameLogo: "/assets/img/team/game-logo1-2.png",
    description: "World-first raider and economy guru with deep knowledge of MMO systems and player progression optimization."
  },
  {
    id: 3,
    name: "Mac Marsh",
    role: "Battle Royale Champion",
    image: "/assets/img/team/1-3.png",
    gameLogo: "/assets/img/team/game-logo1-3.png",
    description: "Top-ranked BR player with multiple tournament wins. Focuses on team dynamics and survival strategies."
  },
  {
    id: 4,
    name: "Eva Raina",
    role: "RPG Designer",
    image: "/assets/img/team/1-4.png",
    gameLogo: "/assets/img/team/game-logo1-4.png",
    description: "Narrative designer specializing in immersive RPG experiences and complex quest systems."
  },
  {
    id: 5,
    name: "Robin Cloth",
    role: "Mobile Gaming Expert",
    image: "/assets/img/team/1-5.png",
    gameLogo: "/assets/img/team/game-logo1-5.png",
    description: "Expert in mobile game mechanics and intuitive UI/UX design for touchscreen gameplay."
  },
  {
    id: 6,
    name: "Sarah Connor",
    role: "Esports Coach",
    image: "/assets/img/team/1-6.png",
    gameLogo: "/assets/img/team/game-logo1-6.png",
    description: "Professional esports coach with championship-winning teams across multiple game genres."
  }
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
  
  .team-card {
    animation: fadeInUp 0.5s forwards;
  }
`;

export default function Team() {
  const teamCardRefs = useRef([]);

  useEffect(() => {
    // Add animation delays to team cards
    teamCardRefs.current.forEach((el, idx) => {
      if (el) {
        el.style.animationDelay = `${idx * 0.15}s`;
        el.classList.add('team-card');
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
            <h1 style={styles.breadcumbTitle} className="breadcumb-title">Our Team</h1>
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
              <li>Our Team</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section style={styles.teamSection}>
        <div style={styles.overlay} />
        <div style={styles.container}>
          <div style={styles.titleArea}>
            <span style={styles.subTitle}># Meet The Professionals</span>
            <h2 style={{...styles.secTitle, ...styles.titleAnimation}}>
              Our Elite Gaming Specialists
            </h2>
          </div>
          
          <div style={styles.teamGrid}>
            {teamMembers.map((member, idx) => (
              <div
                key={member.id}
                style={styles.teamCard}
                ref={el => teamCardRefs.current[idx] = el}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 0 15px #ff00aa";
                  e.currentTarget.querySelector('img').style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(255,0,150,0.3)";
                  e.currentTarget.querySelector('img').style.transform = "scale(1)";
                }}
              >
                <div style={styles.teamImgWrapper}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={styles.teamImg}
                    loading="lazy"
                  />
                  <img
                    src={member.gameLogo}
                    alt={member.role}
                    style={styles.gameLogo}
                  />
                </div>
                <div style={styles.teamContent}>
                  <h3 style={styles.teamName}>{member.name}</h3>
                  <p style={styles.teamRole}>{member.role}</p>
                  <p style={styles.teamDesc}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}