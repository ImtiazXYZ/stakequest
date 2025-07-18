import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I play and stake at the same time?',
      answer: 'No. Our mutually exclusive system means users can only either play to earn or stake to earn at any given moment. This avoids reward exploitation and preserves token stability.'
    },
    { 
      question: 'When can I claim my $SQL rewards?', 
      answer: 'Immediately. All rewards — both gameplay and staking — are claimable in real-time via your profile dashboard. No third-party claim tools or lockups required.' 
    },
    { 
      question: 'Can I bridge my $SQL to other chains?', 
      answer: 'Yes. StakeQuest offers native cross-chain bridging to Ethereum, Polygon, Arbitrum, and zkSync (coming soon). Bridge activity is transparent and fast (usually under 60 seconds).' 
    },
    { 
      question: 'Are all in-game assets NFTs?', 
      answer: 'Yes. Characters, weapons, land, and rare items are ERC-721 or ERC-1155 NFTs, giving you full ownership, tradability, and composability.' 
    },
    { 
      question: 'Can partners integrate with the staking API?', 
      answer: 'Absolutely. Partners such as launchpads, wallets, and dashboards can plug into our staking logic via API, allowing direct integration and user access.' 
    },
    { 
      question: 'Will there be a mobile version?', 
      answer: 'Yes. A mobile web dashboard is planned for Q1 2026, with a lightweight companion app to follow.' 
    },
  
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <style jsx>{`
        /* Base styles */
        .faq-container {
          background: linear-gradient(to bottom, #06071a, #0a0c2a);
          color: #fff;
          font-family: 'Arial', sans-serif;
          padding: 60px 20px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .faq-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          flex-wrap: wrap;
        }
        
        /* Left side styles */
        .faq-left {
          flex: 1;
          padding-right: 50px;
          position: relative;
          animation: fadeInLeft 0.8s ease-out;
          min-width: 300px;
          margin-bottom: 40px;
        }
        
        .faq-title {
          font-size: 42px;
          margin-bottom: 15px;
          color: #fff;
          font-weight: 700;
          line-height: 1.3;
          text-shadow: 0 0 10px rgba(255,255,255,0.1);
          background: linear-gradient(to right, #fff, #00f5a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .faq-subtitle {
          color: #fff;
          opacity: 0.8;
          margin-bottom: 50px;
          font-size: 18px;
          line-height: 1.6;
          max-width: 500px;
        }
        
        /* Right side styles */
        .faq-right {
          flex: 1;
          max-width: 600px;
          animation: fadeInRight 0.8s ease-out;
          min-width: 300px;
        }
        
        /* FAQ item styles */
        .faq-item {
          border-radius: 15px;
          margin-bottom: 20px;
          padding: 25px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: #111428;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          overflow: hidden;
          position: relative;
        }
        
        .faq-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,245,160,0.2);
        }
        
        .faq-item.active {
          background: linear-gradient(135deg, #1b1f3a, #25294a);
          box-shadow: 0 10px 30px rgba(0,245,160,0.15);
        }
        
        .faq-header {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        
        .faq-number {
          background: linear-gradient(135deg, #00f5a0, #00d9f5);
          border-radius: 50%;
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          margin-right: 20px;
          font-weight: bold;
          color: #111428;
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(0,245,160,0.5);
        }
        
        .faq-question {
          flex: 1;
          font-size: 18px;
          margin: 0;
          color: #fff;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .faq-toggle {
          font-size: 24px;
          margin-left: 15px;
          color: #00f5a0;
          transition: transform 0.3s ease;
          transform: rotate(0deg);
          flex-shrink: 0;
        }
        
        .faq-toggle.active {
          transform: rotate(45deg);
        }
        
        .faq-answer {
          margin-top: 20px;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          padding-right: 40px;
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .faq-content {
            flex-direction: column;
            align-items: center;
          }
          
          .faq-left, .faq-right {
            width: 100%;
            max-width: 100%;
            padding-right: 0;
          }
          
          .faq-title {
            font-size: 36px;
          }
          
          .faq-subtitle {
            font-size: 16px;
            max-width: 100%;
          }
        }
        
        @media (max-width: 768px) {
          .faq-container {
            padding: 40px 15px;
          }
          
          .faq-title {
            font-size: 32px;
          }
          
          .faq-item {
            padding: 20px;
          }
          
          .faq-question {
            font-size: 16px;
          }
          
          .faq-answer {
            font-size: 14px;
          }
        }
        
        @media (max-width: 576px) {
          .faq-title {
            font-size: 28px;
          }
          
          .faq-number {
            width: 25px;
            height: 25px;
            line-height: 25px;
            margin-right: 15px;
          }
          
          .faq-toggle {
            font-size: 20px;
          }
        }
      `}</style>
      
      <div className="faq-content">
        <div className="faq-left">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            Do have any kind of questions? We're here to help.
          </p>
          <img src="assets/img/blog/faq.png" alt="" />
        </div>
        
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-header">
                <span className="faq-number">{index + 1}</span>
                <h3 className="faq-question">{faq.question}</h3>
                <span className={`faq-toggle ${activeIndex === index ? 'active' : ''}`}>
                  +
                </span>
              </div>
              {activeIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;