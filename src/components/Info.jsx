import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarker, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Info = () => {
  return (
    <section className="info_section">
      <div className="container">
        <div className="contact_nav">
          <a href="">

            <FontAwesomeIcon icon={faPhone}/>
            <span>Call : +01 123455678990</span>
          </a>
          <a href="">

            <FontAwesomeIcon icon={faEnvelope}/>
            <span>Email : demo@gmail.com</span>
          </a>
          <a href="">

            <FontAwesomeIcon icon={faMapMarker}/>
            <span>Location</span>
          </a>
        </div>
        <div className="col-md-7 mx-auto px-0">
          <div className="info_form_social_box">
            <h4>SIGN UP TO OUR NEWSLETTER</h4>
            <form action="">
              <input type="text" placeholder="Enter Your Email" />
              <button type="submit">Subscribe</button>
            </form>
            <div className="social_box">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <FontAwesomeIcon icon={faFacebookF}/>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
