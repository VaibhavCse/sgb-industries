import React from 'react';
import './AppEchange.css';

const AppExchange = () => {
  return (
    <section id="experience" className="experience">
      <div className="container management-team">
        <div className="row">
          <div className="col-md-3">
            <h2 className="section-title">AppExchange Development Services</h2>
            <p className="section-description">
              Avocsas, a leading Salesforce AppExchange App Development Company, specializes in empowering businesses to create, market, and expand their applications. Our expert team crafts dynamic Avocsas AppExchange apps with advanced features, helping businesses achieve their goals.
            </p>
          </div>
          <div className="col-md-9 team-content">
            {/* Firm Sections */}
            {[
              {
                title: 'Strategic App Development Consultancy',
                description: `Leverage Avocsas expertise for insightful App Development Consultancy, guiding businesses through strategic decisions to optimize their Salesforce applications. Our experienced consultants provide tailored advice and strategies to enhance your Salesforce environment, ensuring that your applications align with your business goals and drive success.`,
              },
              {
                title: 'Tailored AppExchange App Development',
                description: `Unlock innovation with Avocsas' custom AppExchange App Development services, designed to meet unique business needs and enhance your overall marketplace presence. Our expert team conducts a comprehensive assessment of your requirements, ensuring that each application is tailored to your specific objectives.`,
              },
              {
                title: 'Ensuring AppExchange Compliance',
                description: `Rely on Avocsas to navigate the complexities of AppExchange Compliance, ensuring that your applications meet the platform's standards for a smooth and compliant deployment. Our team will guide you through the necessary security reviews and compliance checks required by Salesforce, helping you adhere to industry regulations and best practices.`,
              },
              {
                title: 'AppExchange Security Review',
                description: `Safeguard your applications with Avocsas' meticulous AppExchange Security Review, ensuring that your solutions meet the highest security standards before deployment on the marketplace. Our comprehensive evaluation process involves a thorough examination by the Salesforce Security team, designed to protect your applications from potential data breaches and vulnerabilities.`,
              },
              {
                title: 'Salesforce Lightning-Ready Apps',
                description: `Experience cutting-edge technology with Avocsas' development of Salesforce Lightning-Ready Apps, providing advanced features and seamless integration for an enhanced user experience. Our expert team specializes in creating innovative Lightning-ready applications that leverage the powerful capabilities of the Salesforce Lightning framework.`,
              },
            ].map((firm, index) => (
              <div key={index} className="firm tile">
                <h3 className="firm-name">{firm.title}</h3>
                <p className="firm-description">{firm.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppExchange;
