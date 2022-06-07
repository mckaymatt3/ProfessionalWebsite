import React from 'react';
import "./style.css";

import ProjectCarousel from '../ProjectCarousel';

const Works = () => {
  return (
    <div className="works">
      <h1>Projects</h1>
      <ProjectCarousel />
      <p>See more in the Github link below</p>
      <br />
      <br />  
      <h1>Experiences</h1>
      <p>Company: Ernst & Young</p>
      <p>Role: Assurance Manager</p>
      <p>Date: 2016 - 2021</p>
      <br />
      <p>Company: Marine Education Initiative</p>
      <p>Role: Treasurer, Board of Directors</p>
      <p>Date: 2007 - Current</p>
      <br />
    </div>
  );
};

export default Works;