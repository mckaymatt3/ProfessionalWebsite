import React from 'react';
import "./style.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>CSS</li>
          <li>HTML</li>
          {/* <li>Node.js</li> */}
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>React.js</li>
          <li>Rails & Sinatra </li>
          <li>Redux & Context</li>
          {/* <li>Context</li> */}
          <li>Bootstrap</li>
          <li>Tailwind</li>
          {/* <li>Sinatra</li> */}
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Chrome Dev</li>
          <li>Github</li>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>WebSockets</li>
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
          <strong>Additional Technical Skills:</strong>
          <li>Financial Statements</li>
          <li>GAAP Technical Accounting</li>
          <li>FASB & AICPA Knowledge</li>
          <li>Budgeting</li>
          <li>Finance</li>
          <li>Sales</li>
          <li>Microsoft Office</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;