import React from 'react';
import aboutImg1 from '../assets/images/about-img2.jpg'


const About1 = () => {
    return (
        <section className="about_section about_section2 layout_padding ">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                What Makes Our Tea Special...
              </h2>
            </div>
            <p>
              Iusto aperiam ex incidunt saepe. Dolor aliquam iste modi officia in qui, rem delectus! Eos ratione, fugiat, reprehenderit velit nulla commodi aliquid excepturi nesciunt voluptate amet autem, sequi sit consectetur!
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src={aboutImg1} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
};

export default About1;