import React from 'react';
import sliderImg from '../assets/images/slider-bg.jpg'

const Slider = () => {
    return (
        <section className="slider_section ">
      <div className="slider_bg_box">
        <img src={sliderImg} alt=""/>
      </div>
      <div id="customCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                  <div className="detail-box">
                    <h1>
                      We Bring To You <br/>
                      Tea Products
                    </h1>
                    <p>
                      Dolorem vitae a sit iusto cum quos rerum, incidunt vero pariatur adipisci molestiae temporibus animi cumque!
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                  <div className="detail-box">
                    <h1>
                      We Bring To You <br/>
                      Tea Products
                    </h1>
                    <p>
                      Dolorem vitae a sit iusto cum quos rerum, incidunt vero pariatur adipisci molestiae temporibus animi cumque!
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                  <div className="detail-box">
                    <h1>
                      We Bring To You <br/>
                      Tea Products
                    </h1>
                    <p>
                      Dolorem vitae a sit iusto cum quos rerum, incidunt vero pariatur adipisci molestiae temporibus animi cumque!
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            <li data-target="#customCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#customCarousel" data-slide-to="1"></li>
            <li data-target="#customCarousel" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
    );
};

export default Slider;