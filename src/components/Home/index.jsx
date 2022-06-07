import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hey there!</p>
          <p>I'm Matt McKay,</p>
          <p>Software Developer & CPA.</p>
        </h1>
        <Link to="/about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/matt-logo.png`}
          alt="picture"
        />
      </div>
    </div>
  );
  };
  

export default Home