import React from "react";
import earthlyLogo from "../image/navbarImages/earthlyLogo.png";
import dieImg from "../image/navbarImages/dieImg.png";
import cartImg from "../image/navbarImages/cartImg2.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex" href="#">
            <img
              alt="Logo"
              width="65"
              height="60"
              className=" d-inline-block mx-3 align-text-top"
              src={earthlyLogo}
            />
            <div className="d-flex flex-column">
              <span> Earthly </span>
              <span className="titleDesc">
                Sustainable product at affordable prices
              </span>
            </div>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="dieImg" href="#">
              <img src={dieImg} alt="die" />
            </a>
            <div className="container d-flex justify-content-end">
              <a href="#" className="home m-3">
                Home
              </a>
              <a href="#" className="shop m-3">
                Shop
              </a>
              <button className="btn getBtn btn-outline-dark mx-3">
                Get in Touch{" "}
              </button>
              <button className="btn navCart mx-3">
                
                <img  src={cartImg} alt="cart" />
               {/* <span>1</span> */}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
