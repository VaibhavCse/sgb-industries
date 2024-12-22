import React from 'react';
import './Projects.css';
import security1 from './standard-quality-control-concept-m (1).jpg';
import security2 from './standard-quality-control-concept-m.jpg';
import security3 from './cybersecurity-concept-illustration.jpg'; 


const Security = () => {
  const projects = [
    {
      title: 'Comprehensive Salesforce Security Assessment and Maturity Tracking with Avocsas',
      description: 'Avocsas will perform an extensive security audit of your Salesforce platform and infrastructure. This evaluation will yield a security maturity rating, enabling you to track your progress in enhancing Salesforce security practices over time. Feel free to adjust any specific terms or phrases to better fit your branding or messaging!',
      image: security1, // Image URL
    },
    {
      title: 'Empowering Security for Your Salesforce Environment',
      description: 'Our Salesforce Security Services equip your organization with robust security measures to protect your critical data. We offer security audits, risk assessments, and implementations of Salesforce Shield and Event Monitoring. If you need any further adjustments or additional content, feel free to ask!',
      image: security2,
    },
    {
      title: 'Ensuring Compliance Across Your Salesforce Landscape',
      description: 'Stay compliant with regulations and industry standards through our Salesforce Compliance Services. We offer comprehensive compliance audits, Salesforce Health Checks, best practice consultations, and more to help safeguard your organization. If you need further adjustments or additional content, feel free to ask!',
      image: security3,
    },
    
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className='projectheading'>Salesforce Security Services</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Security;
