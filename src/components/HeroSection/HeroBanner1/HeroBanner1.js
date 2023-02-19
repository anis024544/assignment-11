import React from "react";
import "./HeroBanner1.css";

const HeroBanner1 = ({ info,ShowOffer }) => {
  return (
    <div
      style={{ backgroundColor: info.bg }}
      className="banner-container1 d-flex justify-content-between"
    >
      <div className="banner-left">
        <img className="corner-img" src={info.bannerLogo} alt="" />
        
        {ShowOffer?<h5 className="text-white mb-5">Special Offer</h5>: <img className="merry-logo" src={info.logo2} alt="" />}
        <img src={info.headline1} alt="" />
        <h1 className="text-center text-white">{info.text1}</h1>
        <h4 className="text-center text-white w-75">{info.text2}</h4>
        <div>
          <button className="shop-btn btn btn-dark">Shop Now</button>
        </div>
      </div>
      <div className="banner-logo">
        <img src={info.books} alt="" />
      </div>
    </div>
  );
};

export default HeroBanner1;
