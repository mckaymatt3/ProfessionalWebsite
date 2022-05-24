import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Matt McKay</p>
          <p>Software developer</p>
        </h1>
        <Link to="/about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/matt-logo.png`}
          alt="person picture"
        />
      </div>
    </div>
  );
  };
  

export default Home