import React from 'react';
import aboutImg from '../assets/images/about-img.jpg'


const About = () => {
    return (
        <section className="about_section about_section1 layout_padding ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={aboutImg} alt=""/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About Us
                  </h2>
                </div>
                <p>
                  Eveniet, laboriosam omnis. Nemo itaque ullam perferendis corporis eius cupiditate fugiat quisquam, veritatis ratione quasi vel in modi at ipsa placeat, similique dignissimos consequuntur ipsum, molestias tempore. Voluptatem, fugiat itaque?
                </p>
                <p>
                  Necessitatibus ut doloremque facere a unde cupiditate consequuntur eos et voluptatibus optio aut, expedita reiciendis libero impedit quo cum ipsa cumque aliquam officia quos, voluptate sint quae consectetur. Necessitatibus, animi?
    
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;