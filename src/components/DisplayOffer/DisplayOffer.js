import React from "react";
import "./DisplayOffer.css";

const DisplayOffer = () => {
  return (
    <div className="d-flex mt-5">
      <div className="left-Offer-cart-container mx-5">
      <img
            className="offer-logo"
            src=" https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/sale.png"                                                                                     
         alt=""
         />
        <div>
        <h1 className="text-center text-white offer-headline">Books Makes Great Gifts</h1>
        <p className="offer-text-two">Why not send the gift of a book to family & friends</p>
        </div>
      </div>
      <div className="right-Offer-cart-container">
        <div className="text-white right-side-offer-text">
        <h6>NOVELS EVERY DAY !</h6>
        <h1 className="sale-text">Sale 10% Off</h1>
        <h5>It all begins with a great book</h5>
        <button className="ms-2 mt-4 right-offer-btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayOffer;
