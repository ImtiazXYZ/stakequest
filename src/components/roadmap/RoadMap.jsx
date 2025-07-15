import React from 'react';

const Roadmap = () => {
  const styles = {
    body: {
      background: '#0b0f1a',
      color: '#fff',
      fontFamily: "'Arial', sans-serif",
      display: 'flex',
      justifyContent: 'center',
      padding: '50px',
      overflowX: 'hidden'
    },
    roadmap: {
      position: 'relative',
      width: '800px',
    },
    h1: {
      textAlign: 'center',
      marginBottom: '10px',
      color: '#fff',
      fontSize: '2.5rem',
      fontWeight: '700',
      textShadow: '0 0 10px rgba(0, 245, 160, 0.3)',
      animation: 'glow 2s ease-in-out infinite alternate'
    },
    subtitle: {
      textAlign: 'center',
      color: '#fff',
      marginBottom: '50px',
      opacity: '0.7',
      fontSize: '1.1rem',
      animation: 'fadeIn 2s ease-in'
    },
    timeline: {
      position: 'absolute',
      left: '50%',
      top: '100px',
      bottom: '50px',
      width: '2px',
      background: 'linear-gradient(to bottom, #00f5a0, #00d9f5)',
      transform: 'translateX(-50%)',
      boxShadow: '0 0 10px rgba(0, 245, 160, 0.5)',
      animation: 'timelinePulse 3s infinite'
    },
    stage: {
      background: 'rgba(17, 23, 38, 0.8)',
      borderRadius: '10px',
      padding: '20px',
      width: '300px',
      position: 'relative',
      marginBottom: '50px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      animation: 'fadeInUp 1s ease-out'
    },
    stageHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0, 245, 160, 0.2)',
      borderColor: 'rgba(0, 245, 160, 0.3)'
    },
    left: {
      marginRight: 'auto',
      borderLeft: '3px solid #00f5a0'
    },
    right: {
      marginLeft: 'auto',
      borderRight: '3px solid #00f5a0'
    },
    beforeCommon: {
      content: '""',
      position: 'absolute',
      top: '20px',
      width: '16px',
      height: '16px',
      background: '#00f5a0',
      borderRadius: '50%',
      boxShadow: '0 0 10px #00f5a0',
      zIndex: '1',
      transition: 'all 0.3s ease'
    },
    beforeHover: {
      transform: 'scale(1.2)',
      boxShadow: '0 0 15px #00f5a0'
    },
    beforeLeft: {
      right: '-38px',
      left: 'auto'
    },
    beforeRight: {
      left: '-38px',
      right: 'auto'
    },
    h2: {
      margin: '0 0 10px',
      color: '#fff',
      fontSize: '1.3rem',
      fontWeight: '600',
      whiteSpace: 'pre-line'
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
    li: {
      marginBottom: '8px',
      color: '#fff',
      position: 'relative',
      paddingLeft: '15px',
      lineHeight: '1.4',
      opacity: '0.9'
    },
    liBefore: {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '8px',
      width: '6px',
      height: '6px',
      backgroundColor: '#00f5a0',
      borderRadius: '50%'
    },
    '@keyframes glow': {
      from: {
        textShadow: '0 0 10px rgba(0, 245, 160, 0.3)'
      },
      to: {
        textShadow: '0 0 15px rgba(0, 245, 160, 0.6), 0 0 20px rgba(0, 245, 160, 0.4)'
      }
    },
    '@keyframes fadeIn': {
      from: {
        opacity: 0,
        transform: 'translateY(10px)'
      },
      to: {
        opacity: 0.7,
        transform: 'translateY(0)'
      }
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translateY(20px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    },
    '@keyframes timelinePulse': {
      '0%': {
        opacity: 0.8
      },
      '50%': {
        opacity: 1,
        boxShadow: '0 0 15px rgba(0, 245, 160, 0.7)'
      },
      '100%': {
        opacity: 0.8
      }
    }
  };

  const [hoveredStage, setHoveredStage] = React.useState(null);

  const Stage = ({ side, title, items, index }) => (
    <div 
      style={{ 
        ...styles.stage, 
        ...(side === 'left' ? styles.left : styles.right),
        ...(hoveredStage === index && styles.stageHover)
      }}
      onMouseEnter={() => setHoveredStage(index)}
      onMouseLeave={() => setHoveredStage(null)}
    >
      <div
        style={{
          ...styles.beforeCommon,
          ...(side === 'left' ? styles.beforeLeft : styles.beforeRight),
          ...(hoveredStage === index && styles.beforeHover)
        }}
      />
      <h2 style={styles.h2}>{title}</h2>
      <ul style={styles.ul}>
        {items.map((item, idx) => (
          <li style={styles.li} key={idx}>
            <span style={styles.liBefore} /> {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div style={styles.body}>
      <style>
        {`
          @keyframes glow {
            from {
              text-shadow: 0 0 10px rgba(0, 245, 160, 0.3);
            }
            to {
              text-shadow: 0 0 15px rgba(0, 245, 160, 0.6), 0 0 20px rgba(0, 245, 160, 0.4);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 0.7;
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
          @keyframes timelinePulse {
            0% {
              opacity: 0.8;
            }
            50% {
              opacity: 1;
              box-shadow: 0 0 15px rgba(0, 245, 160, 0.7);
            }
            100% {
              opacity: 0.8;
            }
          }
        `}
      </style>
      <div style={styles.roadmap}>
        <h1 style={styles.h1}>Roadmap</h1>
        <p style={styles.subtitle}>Blockchain a Solid Infrastructure for Growth</p>
        <div style={styles.timeline}></div>

        <Stage
          side="left"
          title="Stage 1\nQ1 - 2023"
          items={['Ideation', 'Proof of Concept', 'Business Deck', 'Security Audit', 'Token on BEP 20']}
          index={0}
        />

        <Stage
          side="right"
          title="Stage 2\nQ2 - 2023"
          items={[
            'Mainnet Launch',
            'Smart Contract Upgrade',
            'Cross-Chain Interoperability',
            'Governance Model Implementation',
            'Whitepaper Release',
          ]}
          index={1}
        />

        <Stage
          side="left"
          title="Stage 3\nQ3 - 2023"
          items={[
            'Decentralized Finance Expansion',
            'Proof of Concept',
            'Privacy Enhancements',
            'Developer Grants Program',
            'BCL Mobile App',
          ]}
          index={2}
        />

        <Stage
          side="right"
          title="Stage 4\nQ4 - 2023"
          items={[
            'Builder NFT Airdrop',
            'Website Launch',
            'Legal Opinion',
            'NFT Marketplace Launch',
            'Whitepaper Release',
          ]}
          index={3}
        />

        <Stage
          side="left"
          title="Stage 5\nQ1 - 2024"
          items={[
            'Scalability Improvements',
            'Real-World Integration',
            'User-Friendly Wallet',
            'Sustainable Blockchain',
            'Global Community Expansion',
          ]}
          index={4}
        />

        <Stage
          side="right"
          title="Stage 6\nQ4 - 2024"
          items={['Citizenship and land parcel', 'Meta Event Aboard Launch']}
          index={5}
        />
      </div>
    </div>
  );
};

export default Roadmap;