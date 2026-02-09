import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Preloader from './components/Preloader';
import Navigation from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Import Pages
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import Tests from './components/Navbar/Tests';
import Packages from './components/Navbar/Packages';
import Contact from './components/Navbar/Contact';
import PageHeader from './components/PageHeader';
import FloatingCTA from './components/FloatingCTA';
import AppointmentForm from './components/AppointmentForm';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="app-container fade-in">
          <Navigation />
          <PageHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bookappointment" element={<AppointmentForm />} />
          </Routes>
          <FloatingCTA />
        </div>
      )}
    </Router>
  );
}

export default App;
