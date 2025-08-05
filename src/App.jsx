import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import AfterLoader from './components/AfterLoader.jsx';
import CarDetail from './components/CarDetail.jsx'; // ⬅️ Import this

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Footer />
            </>
          }
        />
        <Route path="/AfterLoader" element={<AfterLoader />} />
        <Route path="/CarDetail" element={<CarDetail />} /> {/* ⬅️ Add this */}
      </Routes>
    </Router>
  );
}

export default App;
