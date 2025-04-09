import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="profile-image">
          <img src="/images/profile.jpg" alt="Profile" />
        </div>
        <div className="bio">
          <p>
            Hello! I'm a passionate developer with expertise in web development,
            machine learning, and software engineering. I love building things that
            live on the internet and solving complex problems.
          </p>
          <p>
            My journey in technology started when I was in college, and since then,
            I've been continuously learning and improving my skills. I believe in
            writing clean, maintainable code and creating user-friendly experiences.
          </p>
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>JavaScript (React, Node.js)</li>
            <li>Python (Django, Flask)</li>
            <li>Database Design (SQL, NoSQL)</li>
            <li>UI/UX Design</li>
            <li>DevOps (Docker, CI/CD)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;