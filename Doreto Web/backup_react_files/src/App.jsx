import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SitesSection from './components/SitesSection';
import AutomationSection from './components/AutomationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0b] min-h-screen text-white overflow-hidden selection:bg-electricBlue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SitesSection />
        <AutomationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
