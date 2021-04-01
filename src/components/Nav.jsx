import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <header className="header_section ">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>Odora</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  pl-lg-5">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    {" "}
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="product">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="quote_btn-container">
              <a href="">
                <span>Login</span>

                <FontAwesomeIcon icon={faUser} />
              </a>
              <a href="">
                <span>Cart</span>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <FontAwesomeIcon icon={faShoppingBag} />
              </a>
              <form className="form-inline">
                <button
                  className="btn  my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
