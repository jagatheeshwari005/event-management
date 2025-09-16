import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Us</h1>
        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Welcome to our innovative platform where we explore cutting-edge technology 
              and creative solutions. We are passionate about delivering exceptional 
              experiences through our diverse range of products and experiments.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To provide high-quality products and innovative solutions that enhance 
              your daily life. We believe in pushing boundaries and exploring new 
              possibilities through our experimental projects.
            </p>
          </section>
          
          <section className="about-section">
            <h2>What We Do</h2>
            <ul>
              <li>Develop premium quality products</li>
              <li>Create innovative experimental solutions</li>
              <li>Provide exceptional customer experiences</li>
              <li>Explore new technologies and methodologies</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
