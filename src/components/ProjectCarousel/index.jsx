import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import { Carousel } from 'react-responsive-carousel';



function ProjectCarousel() {
  // const img1 = "https://w7.pngwing.com/pngs/662/687/png-transparent-basketball-illustration-basketball-sports-equipment-sports-league-woodville-tompkins-institute-basketball-sport-orange-team-thumbnail.png";
  const img1 = `${process.env.PUBLIC_URL}/RetroBnB.png`;
  const img2 = `${process.env.PUBLIC_URL}/StatsDashboard.png`;
  const img3 = `${process.env.PUBLIC_URL}/UHungry.png`;
  const img4 = `${process.env.PUBLIC_URL}/AuxFront1.png`;
  const [screenWidth, setScreenWidth] = useState(0);

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  const handleSize = screenWidth < 600 ? "95vw" : "55vw"

  console.log("screen width:", screenWidth)
  console.log("handle size", handleSize)
  
  return (
    <Carousel
      showThumbs={true}
      showStatus={true}
      infiniteLoop
      swipeable
      stopOnHover
      // autoPlay
      useKeyboardArrows
      transitionTime={1500}
      // axis="vertical"
      // selectedItem={1}
      // can be percentage too
      width={handleSize}
    >
      <div>
          <img src={img2} alt="St@s" />
          <p className="legend"> St@s </p>
          <a href="https://github.com/mckaymatt3/ReactDashboard">Github</a>
          <br/>
          <a href="https://stats-react-dashboard.netlify.app/">Demo</a> 
      </div>
      <div>
          <img src={img3} alt="U Hungry?" />
          <p className="legend">U Hungry?</p>
          <a href="https://github.com/mckaymatt3/Phase-2-project-Uhungry">Github</a>
          <br/>
          <a href="https://u-hungry.netlify.app/#/">Demo</a>
      </div>
      <div>
          <img src={img1} alt="Retro BnB" />
          <p className="legend">Retro BnB</p>
          <a href="https://github.com/bc-kelly/phase-3-project-front-end">Github</a>
          <br/>
          <a href="https://hotelproject-react.netlify.app/">Demo</a>
      </div>
      <div>
          <img src={img4} alt="Aux" />  
          <p className="legend">Aux</p>
          <a href="https://github.com/mckaymatt3/Phase5Project">Github</a>
          <br/>
          <a href="">Demo Coming Soon...</a>
      </div>
    </Carousel>
  )
}

export default ProjectCarousel