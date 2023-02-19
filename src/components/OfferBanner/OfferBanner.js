import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./OfferBanner.css";

const OfferBanner = () => {
  return (
   <div className="mx-5 mt-5">
     <div className="banner-image">
      <div className="text-for-banner w-75 text-center">
        <div className=""><h6>OUR BIGGEST SALE</h6></div>
        
          <h1 className="w-75 text-center ms-5 font-weight-bold">Only $5.99 a month</h1>
        
        
          <h6>For The First 5 Months</h6>
       
      </div>

      <div className="me-5">
        <div className="text-center"><h6>Online Book’s store!</h6></div>
        <div>
          <button className="banner-btn">
            Shop Now <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default OfferBanner;
