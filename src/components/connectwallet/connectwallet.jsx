import React, { useEffect } from 'react';

const ConnectWallet = () => {
  useEffect(() => {
    // Initialize animations when component mounts
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });

    // Countdown timer initialization
    const launchDate = new Date(2024, 11, 31).getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      const daysEl = document.getElementById('wallet-days');
      const hoursEl = document.getElementById('wallet-hours');
      const minutesEl = document.getElementById('wallet-minutes');
      const secondsEl = document.getElementById('wallet-seconds');
      
      if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
      if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
      if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
      if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    };
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Internal CSS styles
  const styles = {
    section: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0b0f1a 0%, #1a1f33 100%)',
      color: '#fff',
      fontFamily: "'Arial', sans-serif",
      overflow: 'hidden',
      textAlign: 'center',
      position: 'relative'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
      zIndex: '1'
    },
    titleArea: {
      marginBottom: '60px'
    },
    subTitle: {
      display: 'inline-block',
      color: '#00f5a0',
      fontSize: '18px',
      marginBottom: '15px',
      position: 'relative',
      opacity: '0',
      transform: 'translateY(20px)',
      transition: 'all 0.8s ease'
    },
    secTitle: {
      fontSize: '3.5rem',
      margin: '0',
      color: '#fff',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px'
    },
    comingSoonText: {
      display: 'inline-block',
      position: 'relative'
    },
    letter: {
      display: 'inline-block',
      opacity: '0',
      transform: 'translateY(20px)',
      animation: 'walletLetterDrop 0.4s ease forwards'
    },
    exclamation: {
      display: 'inline-block',
      color: '#00f5a0',
      opacity: '0',
      transform: 'scale(0)',
      animation: 'walletPopIn 0.5s ease 1.1s forwards'
    },
    countdownContainer: {
      margin: '40px auto',
      opacity: '0',
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease 0.5s'
    },
    countdown: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px'
    },
    countdownItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    countdownNumber: {
      fontSize: '3.5rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #00f5a0 0%, #00d9f5 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      textShadow: '0 2px 10px rgba(0, 245, 160, 0.3)'
    },
    countdownLabel: {
      fontSize: '1rem',
      color: 'rgba(255, 255, 255, 0.7)',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginTop: '5px'
    },
    countdownSeparator: {
      fontSize: '2rem',
      color: '#00f5a0',
      marginBottom: '30px'
    },
    progressContainer: {
      maxWidth: '600px',
      margin: '60px auto',
      opacity: '0',
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease 0.7s'
    },
    progressText: {
      fontSize: '1.1rem',
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: '15px'
    },
    progressBar: {
      height: '8px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '4px',
      overflow: 'hidden',
      position: 'relative'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%)',
      borderRadius: '4px',
      position: 'relative',
      transition: 'width 1s ease',
      width: '75%'
    },
    progressPercent: {
      fontSize: '1.2rem',
      color: '#00f5a0',
      marginTop: '10px',
      fontWeight: '600'
    },
    ctaButton: {
      marginTop: '50px',
      opacity: '0',
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease 0.9s'
    },
    notifyBtn: {
      background: 'transparent',
      color: '#00f5a0',
      border: '2px solid #00f5a0',
      padding: '15px 40px',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    btnIcon: {
      marginLeft: '10px',
      transition: 'all 0.3s ease'
    }
  };

  // Animation styles that need to be injected
  const animationStyles = `
    @keyframes walletLetterDrop {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes walletPopIn {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      80% {
        transform: scale(1.2);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes walletProgressShine {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `;

  return (
    <section id="wallet-coming-soon" style={styles.section}>
      <style>{animationStyles}</style>
      <div style={styles.container}>
        <div style={styles.titleArea}>
          <span style={styles.subTitle} data-animate></span>
          <h2 style={styles.secTitle}>
            <span style={styles.comingSoonText}>
              <span style={{...styles.letter, animationDelay: '0.1s'}}>C</span>
              <span style={{...styles.letter, animationDelay: '0.2s'}}>o</span>
              <span style={{...styles.letter, animationDelay: '0.3s'}}>m</span>
              <span style={{...styles.letter, animationDelay: '0.4s'}}>i</span>
              <span style={{...styles.letter, animationDelay: '0.5s'}}>n</span>
              <span style={{...styles.letter, animationDelay: '0.6s'}}>g</span>
              <span style={{display: 'inline-block', width: '10px'}}>&nbsp;</span>
              <span style={{...styles.letter, animationDelay: '0.7s'}}>S</span>
              <span style={{...styles.letter, animationDelay: '0.8s'}}>o</span>
              <span style={{...styles.letter, animationDelay: '0.9s'}}>o</span>
              <span style={{...styles.letter, animationDelay: '1.0s'}}>n</span>
            </span>
            <span style={styles.exclamation}>!</span>
          </h2>
        </div>

        <div style={styles.countdownContainer} data-animate>
          <div style={styles.countdown}>
            <div style={styles.countdownItem}>
              <span style={styles.countdownNumber} id="wallet-days">00</span>
              <span style={styles.countdownLabel}>Days</span>
            </div>
            <div style={styles.countdownSeparator}>:</div>
            <div style={styles.countdownItem}>
              <span style={styles.countdownNumber} id="wallet-hours">00</span>
              <span style={styles.countdownLabel}>Hours</span>
            </div>
            <div style={styles.countdownSeparator}>:</div>
            <div style={styles.countdownItem}>
              <span style={styles.countdownNumber} id="wallet-minutes">00</span>
              <span style={styles.countdownLabel}>Minutes</span>
            </div>
            <div style={styles.countdownSeparator}>:</div>
            <div style={styles.countdownItem}>
              <span style={styles.countdownNumber} id="wallet-seconds">00</span>
              <span style={styles.countdownLabel}>Seconds</span>
            </div>
          </div>
        </div>

        <div style={styles.progressContainer} data-animate>
          <div style={styles.progressText}>Development Progress</div>
          <div style={styles.progressBar}>
            <div style={styles.progressFill}></div>
          </div>
          <div style={styles.progressPercent}>75%</div>
        </div>

        <div style={styles.ctaButton} data-animate>
          <button style={styles.notifyBtn}>
            Notify Me When Ready
            <span style={styles.btnIcon}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectWallet;