import React from 'react';

const connectwallet = () => {
  const styles = {
    section: {
      padding: '80px 0',
      background: '#0b0f1a',
      color: '#fff',
      fontFamily: "'Arial', sans-serif",
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    titleArea: {
      marginBottom: '60px',
      textAlign: 'center'
    },
    subTitle: {
      display: 'inline-block',
      color: '#00f5a0',
      fontSize: '18px',
      marginBottom: '15px',
      position: 'relative',
      animation: 'fadeIn 1s ease-out'
    },
    secTitle: {
      fontSize: '2.5rem',
      margin: '0',
      color: '#fff',
      textShadow: '0 0 10px rgba(0, 245, 160, 0.3)',
      animation: 'glow 2s ease-in-out infinite alternate'
    },
    textTheme: {
      color: '#00f5a0'
    },
    sliderArea: {
      overflow: 'visible',
      padding: '20px 0'
    },
    sliderWrapper: {
      display: 'flex',
      gap: '30px',
      padding: '20px 0',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    blogCard: {
      minWidth: '350px',
      background: '#111726',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
      scrollSnapAlign: 'start',
      animation: 'fadeInUp 0.8s ease-out',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 40px rgba(0, 245, 160, 0.2)'
      }
    },
    blogImg: {
      height: '220px',
      overflow: 'hidden',
      position: 'relative',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease'
      },
      '&:hover img': {
        transform: 'scale(1.1)'
      }
    },
    blogContent: {
      padding: '25px'
    },
    blogMeta: {
      display: 'flex',
      gap: '15px',
      marginBottom: '15px',
      fontSize: '14px',
      color: '#aaa',
      '& a': {
        color: '#aaa',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        '&:hover': {
          color: '#00f5a0'
        }
      }
    },
    blogTitle: {
      fontSize: '1.3rem',
      margin: '0 0 20px',
      color: '#fff',
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        '&:hover': {
          color: '#00f5a0'
        }
      }
    },
    linkBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#00f5a0',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateX(5px)',
        color: '#00d9f5'
      }
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
        opacity: 1,
        transform: 'translateY(0)'
      }
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    }
  };

  const blogs = [
    {
      id: 1,
      img: "assets/img/blog/blog_1_1.jpg",
      author: "By Jonson",
      date: "30 Nov, 2024",
      title: "Strategies for Dominating Your Favorite Game",
      delay: "0.1s"
    },
    {
      id: 2,
      img: "assets/img/blog/blog_1_2.jpg",
      author: "By Jonson",
      date: "25 Dec, 2024",
      title: "Breaking Barriers and Shaping the Future",
      delay: "0.2s"
    },
    {
      id: 3,
      img: "assets/img/blog/blog_1_3.jpg",
      author: "By Jonson",
      date: "23 Jun, 2024",
      title: "Taking Customization to the Next Level",
      delay: "0.3s"
    },
    {
      id: 4,
      img: "assets/img/blog/blog_1_1.jpg",
      author: "By Jonson",
      date: "30 Nov, 2024",
      title: "Strategies for Dominating Your Favorite Game",
      delay: "0.4s"
    },
    {
      id: 5,
      img: "assets/img/blog/blog_1_2.jpg",
      author: "By Jonson",
      date: "25 Dec, 2024",
      title: "Breaking Barriers and Shaping the Future",
      delay: "0.5s"
    },
    {
      id: 6,
      img: "assets/img/blog/blog_1_3.jpg",
      author: "By Jonson",
      date: "23 Jun, 2024",
      title: "Taking Customization to the Next Level",
      delay: "0.6s"
    }
  ];

  return (
    <section id="blog-sec" style={styles.section}>
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
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div style={styles.container}>
        <div style={styles.titleArea}>
          <span style={styles.subTitle}># Wallet</span>
          <h2 style={styles.secTitle}>
           Coming Soon <span style={styles.textTheme}>!</span>
          </h2>
        </div>

        <div style={styles.sliderArea}>
          
        </div>
      </div>
    </section>
  );
};

export default connectwallet;