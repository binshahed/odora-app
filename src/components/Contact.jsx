import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ModelsMap from './ModelsMap';


const Contact = () => {
  return (
    <section className="contact_section  layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <div className="heading_container">
                <h2>Contact Us</h2>
              </div>
              <form action="">
                <div>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                  />
                </div>
                <div className="btn_box">
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <div className="map">
                {/* <div id="googleMap"></div> */}
                {
                  <ModelsMap/>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
