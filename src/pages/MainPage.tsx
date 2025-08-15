import React from 'react';
import './MainPage.css';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Company</h1>
          <p className="hero-subtitle">Innovative solutions for tomorrow's challenges</p>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional business team collaboration"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
