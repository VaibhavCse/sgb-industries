import React from 'react';
import './Projects.css';
import development1 from './consulting.jpg';
import development2 from './7094814.jpg';
import development3 from './Integration.avif';
import development4 from './Support.avif';
import development5 from './Migration.avif';



const About = () => {
  const projects = [
    {
      title: 'Salesforce Consulting',
      description: 'Our experienced consultants assess your company’s objectives and needs to develop a long-term, scalable, and personalized Salesforce solution.',
      image: development1,
    },
    {
      title: 'Salesforce Customization',
      description: 'We understand the unique challenges businesses face, which is why we offer customized solutions tailored to your specific requirements.',
      image: development2,
    },
    {
      title: 'Salesforce Integration',
      description: 'We seamlessly integrate your Salesforce platform with third-party applications, including POS systems, CRM, ERP, accounting, and bookkeeping tools, enhancing key performance areas.',
      image: development3,
    },
    {
      title: 'Salesforce Support',
      description: 'We provide ongoing support to keep your e-commerce platform performing optimally in line with market trends, business needs, and customer insights.',
      image: development4,
    },
    {
      title: 'Salesforce Migration',
      description: 'Our Salesforce migration service enables you to access a comprehensive set of features, themes, extensions, and tools without the risk of data loss. This version maintains clarity and professionalism while effectively communicating the services offered. Let me know if you need any further adjustments!',
      image: development5,
    },   
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className='projectheading'>Salesforce Development Services</h2>
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

export default About;
