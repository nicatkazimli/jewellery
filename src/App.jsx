import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Menu/HomePage/HomePage';
import ProductPage from './Menu/ProductPage/ProductPage';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import ScrollFadeWrapper from './Scroll/ScrollFadeWrapper';

const App = () => {
  return (
    <Router>
      <Header /> {/* Header sabit, animasiya yoxdur */}

      <Routes>
        <Route 
          path='/' 
          element={
            <ScrollFadeWrapper>
              <HomePage />
            </ScrollFadeWrapper>
          } 
        />
        <Route 
          path='/product' 
          element={
            <ScrollFadeWrapper>
              <ProductPage />
            </ScrollFadeWrapper>
          } 
        />
      </Routes>

      <ScrollFadeWrapper>
        <Footer />
      </ScrollFadeWrapper>
    </Router>
  );
}

export default App;
