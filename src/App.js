import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Cursor from './components/common/Cursor';
import Preloader from './components/common/Preloader';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import HomePage from './pages/HomePage';  // Create this to hold your home sections
import About from './pages/About';              // Your About page component
import Tournament from './pages/Tournament'; // adjust path if needed
import Blog from './pages/Blog'; // adjust path if needed
import ShopPage from './pages/ShopPage';
import PlayerPage from './pages/PlayerPage';
import GamePage from './pages/GamePage';
import PointTable from './pages/PointTable';
import Contact from './pages/ContactPage';
import CustomCursor from './components/CustomCursor';
import ConnectWallet from './pages/ConnectWallet';
import TeamMembers from './pages/TeamMember';
import ROadMaps from './pages/RoadMap';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Router>
      <div className="App">
        {/* <Cursor /> */}
        <CustomCursor />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/tournament" element={<Tournament />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/players" element={<PlayerPage />} />
            <Route path="/gamepage" element={<GamePage />} />
            <Route path="/point-table" element={<PointTable />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connectwallet" element={<ConnectWallet />} />
            <Route path="/team_members" element={<TeamMembers />} />
            <Route path="/roadmap" element={<ROadMaps />} />
            


            {/* Add other routes like tournament, blog, etc here */}
          </Routes>
        </main>
        <Footer />
        {/* Sidebars, modals, etc. can go here if global */}
      </div>
    </Router>
  );
}

export default App;
