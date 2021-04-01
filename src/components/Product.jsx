import React from 'react';
import productImg1 from '../assets/images/p1.png'
import productImg2 from '../assets/images/p2.png'
import productImg3 from '../assets/images/p3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Product = () => {
    return (
        <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Poducts
        </h2>
        <p>
          Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src={productImg1} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Chamomile Tea
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 100.00
                </h6>
                <a href="">
                  <FontAwesomeIcon icon={faShoppingCart}/>
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
            <img src={productImg2} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Herbal Tea
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 200.00
                </h6>
                <a href="">
                <FontAwesomeIcon icon={faShoppingCart}/>
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
            <img src={productImg3} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Linden Tea
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 200.00
                </h6>
                <a href="">
                <FontAwesomeIcon icon={faShoppingCart}/>
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
};

export default Product;