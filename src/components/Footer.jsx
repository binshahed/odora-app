import React from 'react';

const Footer = () => {
    return (
        <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By 
            <a style={{color:"yellow"}} href="https://github.com/binshahed" target="_"> BinShahed</a>
          </p>
        </div>
      </footer>
    );
};

export default Footer;