import React from 'react';
import FadeInOnScroll from './components/FadeInOnScroll';
import CentralHome from './pages/CentralHome';
import Team from './pages/Team';
import Project from './pages/Project';
import Footer from './components/Footer';
import ChiSiamo from './pages/ChiSiamo';
import GalleryCircuiti from './components/GalleryCircuiti';

function App() {
  return (
    <>
    <div id="home">
      <CentralHome />
    </div>

    <div id="project-section">
      <Project />
    </div>
    
    <div id="team">
      <ChiSiamo />
    </div>
    
    <div>
      <Team />
    </div>

    <div id="contatti">
      <Footer />
    </div>
  </>
  );
}

export default App;

