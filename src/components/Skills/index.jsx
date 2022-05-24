import React from 'react';
import "./style.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>Ruby & Rails</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>Material-ui</li>
          <li>React.js</li>
          <li>Sinatra</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Chrome Dev</li>
          <li>Github</li>
          <li>Heroku/Netifly</li>
          <li>Eslint</li>
          <li>Webpack</li>
        </div>
        <div>
          <strong>Soft Skills:</strong>
          <li>Leadership</li>
          <li>Team Building</li>
          <li>Mentoring</li>
          <li>Problem Solving</li>
          <li>Decision Making</li>
          <li>Public Speaking</li>
        </div>
        <div>
          <strong>Technical Skills:</strong>
          <li>Financial Statements</li>
          <li>Technical Accounting</li>
          <li>FASB & ASC Knowledge</li>
          <li>Budgeting</li>
          <li>Finance & Sales</li>
          <li>Microsoft Office</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;