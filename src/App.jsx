import React, { useState, useEffect } from 'react';
import CustomNavbar from './components/CustomNavbar';
import Hero from './components/Hero';
import ImpactNumbers from './components/ImpactNumbers';
import TheCrisis from './components/TheCrisis';
import OurMission from './components/OurMission';
import FeaturedProjects from './components/FeaturedProjects';
import AnimalSpotlight from './components/AnimalSpotlight';
import Stories from './components/Stories';
import TakeAction from './components/TakeAction';
import Footer from './components/Footer';
import { PulseLoader } from 'react-spinners';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Loader ki timing maine 2 seconds kar di hai taaki image aur spinner theek se dikhe
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundColor: '#121212' }}>
        {/* Nature Icon/Image Loader ke theek upar */}
        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
          🌿 {/* Aap chahein toh yahan 🌍 ya 🌳 bhi use kar sakte hain */}
        </div>
        <PulseLoader color="#ff9800" size={15} />
        {/* Purana code: <p className="mt-3 text-muted"...>LOADING HABITAT</p> */}
        <p className="mt-3 text-muted" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>LOADING WILDGUARD</p>      </div>
    );
  }

  return (
    <div>
      <CustomNavbar />
      <Hero />
      <ImpactNumbers />
      <TheCrisis />
      <OurMission />
      <FeaturedProjects />
      <AnimalSpotlight />
      <Stories />
      <TakeAction />
      <Footer />
    </div>
  );
}

export default App;