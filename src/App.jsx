import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import AfterLoader from './components/AfterLoader.jsx';
import CarDetail from './components/CarDetail.jsx';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
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
          <Route path="/CarDetail" element={<CarDetail />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;