import React, { useState, useEffect } from 'react';

const Roadmap = () => {
  const [hoveredStage, setHoveredStage] = useState(null);
  const [visibleStages, setVisibleStages] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.roadmap-stage');
      const newVisibleStages = [];
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          newVisibleStages.push(index);
        }
      });
      
      setVisibleStages(newVisibleStages);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Stage = ({ side, title, items, index }) => {
    const isVisible = visibleStages.includes(index);
    
    return (
      <div 
        className={`roadmap-stage ${side} ${isVisible ? 'visible' : ''} ${hoveredStage === index ? 'hovered' : ''}`}
        onMouseEnter={() => setHoveredStage(index)}
        onMouseLeave={() => setHoveredStage(null)}
      >
        <div className="stage-marker" />
        <h2>{title}</h2>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <span className="item-bullet" /> {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="roadmap-container">
      <style jsx>{`
        /* Base styles */
        .roadmap-container {
          background: #0b0f1a;
          color: #fff;
          font-family: 'Arial', sans-serif;
          padding: 50px 20px;
          position: relative;
          overflow: hidden;
        }
        
        .roadmap-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 0 20px;
        }
        
        .roadmap-title {
          text-align: center;
          margin-bottom: 10px;
          color: #fff;
          font-size: 2.5rem;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(0, 245, 160, 0.3);
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        .roadmap-subtitle {
          text-align: center;
          color: #fff;
          margin-bottom: 50px;
          opacity: 0.7;
          font-size: 1.1rem;
          animation: fadeIn 2s ease-in;
        }
        
        /* Timeline styles */
        .timeline {
          position: absolute;
          left: 50%;
          top: 100px;
          bottom: 50px;
          width: 2px;
          background: linear-gradient(to bottom, #00f5a0, #00d9f5);
          transform: translateX(-50%);
          box-shadow: 0 0 10px rgba(0, 245, 160, 0.5);
          animation: timelinePulse 3s infinite;
          z-index: 1;
        }
        
        /* Stage styles */
        .roadmap-stage {
          background: rgba(17, 23, 38, 0.8);
          border-radius: 10px;
          padding: 20px;
          width: 100%;
          max-width: 400px;
          position: relative;
          margin-bottom: 50px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.5s ease;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0;
          transform: translateY(30px);
        }
        
        .roadmap-stage.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .roadmap-stage.hovered {
          transform: translateY(-5px) !important;
          box-shadow: 0 10px 25px rgba(0, 245, 160, 0.2);
          border-color: rgba(0, 245, 160, 0.3);
        }
        
        .roadmap-stage.left {
          margin-right: auto;
          border-left: 3px solid #00f5a0;
          transform: translateX(-30px);
        }
        
        .roadmap-stage.right {
          margin-left: auto;
          border-right: 3px solid #00f5a0;
          transform: translateX(30px);
        }
        
        .roadmap-stage.visible.left,
        .roadmap-stage.visible.right {
          transform: translateX(0);
        }
        
        .stage-marker {
          position: absolute;
          top: 20px;
          width: 16px;
          height: 16px;
          background: #00f5a0;
          border-radius: 50%;
          box-shadow: 0 0 10px #00f5a0;
          z-index: 2;
          transition: all 0.3s ease;
        }
        
        .roadmap-stage.left .stage-marker {
          right: -38px;
        }
        
        .roadmap-stage.right .stage-marker {
          left: -38px;
        }
        
        .roadmap-stage.hovered .stage-marker {
          transform: scale(1.2);
          box-shadow: 0 0 15px #00f5a0;
        }
        
        .roadmap-stage h2 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 1.3rem;
          font-weight: 600;
          white-space: pre-line;
        }
        
        .roadmap-stage ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        
        .roadmap-stage li {
          margin-bottom: 8px;
          color: #fff;
          position: relative;
          padding-left: 15px;
          line-height: 1.4;
          opacity: 0.9;
        }
        
        .item-bullet {
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          background-color: #00f5a0;
          border-radius: 50%;
        }
        
        /* Mobile timeline animation */
        @keyframes mobileWave {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .roadmap-title {
            font-size: 2rem;
          }
          
          .roadmap-subtitle {
            font-size: 1rem;
          }
          
          .roadmap-stage {
            max-width: 350px;
          }
        }
        
        @media (max-width: 768px) {
          .timeline {
            left: 20px;
          }
          
          .roadmap-stage {
            width: calc(100% - 60px);
            margin-left: 60px;
            border-left: 3px solid #00f5a0;
            border-right: none;
          }
          
          .roadmap-stage.left,
          .roadmap-stage.right {
            margin-right: 0;
            margin-left: 60px;
            transform: translateX(0);
          }
          
          .roadmap-stage.left .stage-marker,
          .roadmap-stage.right .stage-marker {
            left: -38px;
            right: auto;
          }
          
          .roadmap-stage.hovered {
            animation: mobileWave 1s ease;
          }
        }
        
        @media (max-width: 576px) {
          .roadmap-container {
            padding: 30px 15px;
          }
          
          .roadmap-title {
            font-size: 1.8rem;
          }
          
          .roadmap-stage {
            padding: 15px;
          }
          
          .roadmap-stage h2 {
            font-size: 1.1rem;
          }
          
          .roadmap-stage li {
            font-size: 0.9rem;
          }
        }
        
        /* Animations */
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
      `}</style>

      <div className="roadmap-wrapper">
        <h1 className="roadmap-title">Roadmap</h1>
        <p className="roadmap-subtitle">Building a Solid Infrastructure for Growth</p>
        <div className="timeline"></div>

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