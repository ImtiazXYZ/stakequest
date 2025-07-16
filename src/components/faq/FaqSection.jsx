import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How to buy FOX tokens?',
      answer: 'It\'s very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.'
    },
    { 
      question: 'What is the value of FOX tokens?', 
      answer: 'FOX tokens derive their value from platform utility, market demand, and ecosystem growth. The current value can be checked on our official dashboard or supported exchanges.' 
    },
    { 
      question: 'How does staking work?', 
      answer: 'Staking FOX tokens allows you to earn passive income through our proof-of-stake mechanism. Simply lock your tokens in our staking contract to start earning rewards.' 
    },
    { 
      question: 'How are coins distributed?', 
      answer: 'Token distribution follows our whitepaper allocation: 40% public sale, 25% ecosystem development, 20% team (vested), 10% partnerships, and 5% community rewards.' 
    },
    { 
      question: 'What wallets support FOX tokens?', 
      answer: 'FOX is compatible with all ERC-20 wallets including MetaMask, Trust Wallet, and Ledger. We also offer a dedicated mobile wallet for iOS and Android.' 
    },
    { 
      question: 'How can I connect API with my Current Site', 
      answer: 'Our developer portal provides comprehensive API documentation. Integration takes just 3 steps: generate API keys, install our SDK, and implement the endpoints.' 
    },
    { 
      question: 'What is the ICO?', 
      answer: 'Our Initial Coin Offering (ICO) concluded successfully in Q3 2023, raising $15M. Token holders from the ICO receive additional governance rights and bonus rewards.' 
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