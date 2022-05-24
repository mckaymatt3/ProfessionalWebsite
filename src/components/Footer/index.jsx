import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <footer>
        <a href="https://github.com/mckaymatt3" target="_blank">
            <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Github-icon"
            />
        </a>

        <a href="https://www.linkedin.com/in/matt-mckay-cpa/" target="_blank">
            <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn-icon"
            />
        </a>

        <a href="https://www.youtube.com/watch?v=8UIEb3phWPM" target="_blank">
            <img
                src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                alt="Shrek-Run-Fun"
            />
        </a>  

        <a href="mailto:mckaymatt@outlook.com" target="_blank">
            <img
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                alt="Email-icon"
            />
        </a>
        
    </footer>
  );
};

export default Footer;
