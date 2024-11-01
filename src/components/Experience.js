import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container management-team">
        <div className="row">
          <div className="col-md-3">
            <h2 className="section-title">SGB Industries Management Team</h2>
          </div>
          <div className="col-md-9 team-content">
            <div className="team-member tile">
              <img src="./about_image.jpeg" alt="Mr. Ram Prasad Agrawal" className="member-photo" />
              <h3 className="member-name">Mr. Ram Prasad Agrawal</h3>
              <p className="member-description">
                Mr. Ram Prasad Agrawal is a commerce graduate and has more than 35 years of experience in business industries.
                He is the person behind this venture and is instrumental in conceptualizing the business model and giving it a shape to grow and excel with its qualified team of professionals.
              </p>
            </div>

            <div className="team-member tile">
              <img src="./about_image.jpeg" alt="Mr. Kshitiz Agrawal" className="member-photo" />
              <h3 className="member-name">Mr. Naman Gupta</h3>
              <p className="member-description">
                Mr. Naman Gupta holds a master’s degree from a top business school in London.
                He has an experience of the past 15 years in different trade and service industries.
                His innovation and enthusiasm have fueled the growth engine of the company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
