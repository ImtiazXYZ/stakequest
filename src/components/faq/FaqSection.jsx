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

  const styles = {
    faqWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '60px',
      background: 'linear-gradient(to bottom, #06071a, #0a0c2a)',
      color: '#fff',
      fontFamily: '"Arial", sans-serif',
      minHeight: '100vh'
    },
    leftSide: {
      flex: '1',
      paddingRight: '50px',
      position: 'relative',
      animation: 'fadeInLeft 0.8s ease-out'
    },
    title: {
      fontSize: '42px',
      marginBottom: '15px',
      color: '#fff',
      fontWeight: '700',
      lineHeight: '1.3',
      textShadow: '0 0 10px rgba(255,255,255,0.1)',
      background: 'linear-gradient(to right, #fff, #00f5a0)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      color: '#fff',
      opacity: '0.8',
      marginBottom: '50px',
      fontSize: '18px',
      lineHeight: '1.6',
      maxWidth: '500px'
    },
    scrollImage: {
      width: '200px',
      height: '400px',
      background: 'linear-gradient(145deg, #1b1f3a, #25294a)',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      position: 'relative',
      overflow: 'hidden',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'linear-gradient(45deg, transparent, rgba(0,245,160,0.1), transparent)',
        animation: 'shimmer 3s infinite linear'
      }
    },
    rightSide: {
      flex: '1',
      maxWidth: '600px',
      animation: 'fadeInRight 0.8s ease-out'
    },
    faqItem: {
      borderRadius: '15px',
      marginBottom: '20px',
      padding: '25px',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      background: '#111428',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      position: 'relative',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 8px 25px rgba(0,245,160,0.2)'
      }
    },
    activeFaqItem: {
      background: 'linear-gradient(135deg, #1b1f3a, #25294a)',
      boxShadow: '0 10px 30px rgba(0,245,160,0.15)'
    },
    faqHeader: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: '2'
    },
    faqNumber: {
      background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      textAlign: 'center',
      lineHeight: '30px',
      marginRight: '20px',
      fontWeight: 'bold',
      color: '#111428',
      flexShrink: '0',
      boxShadow: '0 0 10px rgba(0,245,160,0.5)'
    },
    faqQuestion: {
      flex: '1',
      fontSize: '18px',
      margin: '0',
      color: '#fff',
      fontWeight: '600',
      transition: 'all 0.3s ease'
    },
    faqToggle: {
      fontSize: '24px',
      marginLeft: '15px',
      color: '#00f5a0',
      transition: 'transform 0.3s ease',
      transform: 'rotate(0deg)',
      flexShrink: '0'
    },
    activeToggle: {
      transform: 'rotate(45deg)'
    },
    faqAnswer: {
      marginTop: '20px',
      color: 'rgba(255,255,255,0.8)',
      lineHeight: '1.6',
      paddingRight: '40px',
      animation: 'fadeIn 0.5s ease-out'
    },
    '@keyframes fadeIn': {
      from: { opacity: '0', transform: 'translateY(10px)' },
      to: { opacity: '1', transform: 'translateY(0)' }
    },
    '@keyframes fadeInLeft': {
      from: { opacity: '0', transform: 'translateX(-30px)' },
      to: { opacity: '1', transform: 'translateX(0)' }
    },
    '@keyframes fadeInRight': {
      from: { opacity: '0', transform: 'translateX(30px)' },
      to: { opacity: '1', transform: 'translateX(0)' }
    },
    '@keyframes shimmer': {
      '0%': { transform: 'translateX(-100%) rotate(45deg)' },
      '100%': { transform: 'translateX(100%) rotate(45deg)' }
    }
  };

  return (
    <div style={styles.faqWrapper}>
      <style>
        {`
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
        `}
      </style>
      
      <div style={styles.leftSide}>
        <h1 style={styles.title}>Frequently Asked Questions</h1>
        <p style={styles.subtitle}>
          Do have any kind of questions? We're here to help.
        </p>
        {/* <div style={styles.scrollImage}></div> */}
      </div>
      
      <div style={styles.rightSide}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              ...styles.faqItem,
              ...(activeIndex === index && styles.activeFaqItem)
            }}
            onClick={() => toggleFAQ(index)}
          >
            <div style={styles.faqHeader}>
              <span style={styles.faqNumber}>{index + 1}</span>
              <h3 style={styles.faqQuestion}>{faq.question}</h3>
              <span style={{
                ...styles.faqToggle,
                ...(activeIndex === index && styles.activeToggle)
              }}>
                +
              </span>
            </div>
            {activeIndex === index && (
              <p style={styles.faqAnswer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;