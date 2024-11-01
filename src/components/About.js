// src/components/About.js
import React from 'react';
import './About.css';
import aboutImage from './about_image.jpeg'; // Placeholder image (optional)



const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-right">
          <h2>About Us</h2>
          <p>
          <strong>Shree Ganesh Besan Industries (SGB Industries)</strong> is a trusted name in the manufacturing, export, and distribution of premium agricultural products. With deep roots in the industry, our expertise extends beyond besan (gram flour) to include a diverse range of high-quality food staples such as rice, wheat, and other essential grains, serving both domestic and international markets.
          </p>
          <p>
           Delivering in <strong>Banswara, Partapur, Sagwara, Ghatol, Pipalkhunt, Kushalgarh, Sajjangarh, Aaspur, Anandpuri</strong> and <strong>nearby villages located within 50km</strong>.
          </p> 
          <p>
            Driven by a commitment to excellence, SGB Industries prides itself on delivering unmatched quality, consistency, and value. Our dedicated management and operations teams ensure that each product meets stringent quality standards, making us a preferred partner for clients worldwide.
          </p>
          <p>
            At SGB Industries, our mission is to provide superior products at competitive prices, fostering enduring relationships with our customers across the globe. With years of experience and a commitment to sustainable practices, we look forward to continuing our legacy of quality and trust in the agricultural sector.
          </p>                
        </div>
        <div className="about-left">
          <img src={aboutImage} alt="About Me" className="about-img" />
        </div>
      </div>
    </section>
  );
}

export default About;
