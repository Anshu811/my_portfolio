import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href="mailto:anshukumari889900@email.com">anshukumari889900@email.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🐙</span>
            <a href="https://github.com/Anshu811" target="_blank" rel="noopener noreferrer">
              github.com/Anshu811
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🔗</span>
            <a 
              href="https://www.linkedin.com/in/anshu-kumari-004197329" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/Anshu811" className="social-link" target="_blank" rel="noopener noreferrer">
            <span>🐙</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/anshu-kumari-004197329" 
            className="social-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>🔗</span>
          </a>
          <a href="mailto:anshukumari889900@email.com" className="social-link">
            <span>📧</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;