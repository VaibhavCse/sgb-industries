import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container management-team">
      <div class="row">
        {/* Section Title */}
        <h2 className="section-title">AI Package</h2>
        <div className="team-content">
          {/* AI Readiness Check */}
          <div className="firm tile">
            <h3 className="firm-name">AI Readiness Check</h3>
            <p className="firm-description">
              Before implementing AI, we provide a comprehensive assessment of your Salesforce organization and licenses to ensure everything is set up correctly. Our team conducts an Org Health Check and delivers a detailed analysis to guide you through the AI integration process.
            </p>
          </div>

          {/* Classify Data for AI */}
          <div className="firm tile">
            <h3 className="firm-name">Classify Data for AI</h3>
            <p className="firm-description">
              <strong>Platform Product:</strong> Einstein Data Detect (Part of Shield)
            </p>
            <p className="firm-description">
              Data security is crucial. Our experts will collaborate with you to identify sensitive data that should remain confidential within your organization. We will classify data based on confidentiality, access restrictions, and mission-critical status.
            </p>
          </div>

          {/* Control Access to AI Data */}
          <div className="firm tile">
            <h3 className="firm-name">Control Access to AI Data</h3>
            <p className="firm-description">
              <strong>Platform Product:</strong> Security Center
            </p>
            <p className="firm-description">
              Centralized access management is essential for protecting AI data. With our Security Center, you can efficiently manage user permissions and organizational configurations related to data used in AI processes.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
