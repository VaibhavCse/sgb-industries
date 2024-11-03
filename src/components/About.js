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
          <strong>Shree Ganesh Besan Industries</strong> is a trusted name in the manufacturing, export, and distribution of premium agricultural products. With deep roots in the industry, our expertise extends beyond besan (gram flour) to include a diverse range of high-quality food staples such as rice, wheat, wheat four, sugar, pulses, food oils and other essential grains, serving both domestic and in national markets.
          </p>
          <p>
          For Domestic market - Delivering on daily basis in <strong>Banswara, Partapur, Sagwara, Ghatol, Pipalkhunt, Kushalgarh, Sajjangarh, Aaspur, Anandpuri</strong> and nearby villages located within 50km.
          </p> 
          <p>
          For Bulk Orders delivery other then domestic supply it depends on the coustomer and company requirements.
          </p>
          <p>
            Driven by a commitment to provide Quality, Our company prides itself on delivering unmatched quality, consistency, and value. Our dedicated management and operations teams ensure that each product meets stringent quality standards, making us a preferred partner for clients nationwide.
          </p>
          <p>
           With years of experience and a commitment to sustainable practices, we look forward to continuing our legacy of quality and trust in the agricultural sector.
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
