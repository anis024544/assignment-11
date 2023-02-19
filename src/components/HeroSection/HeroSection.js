import React, { useEffect } from "react";
import "./HeroSection.css";
import { useState } from "react";
import HeroBanner1 from "./HeroBanner1/HeroBanner1";

import books from "../../images/banner log/books.png";
import book2 from "../../images/2nd_left_img-removebg-preview.png";
import bannerLogo from "../../images/banner log/flower.png";
import headline1 from "../../images/Headline1.png";
import headlinePart2 from "../../images/HeadlinePart2.png";
import logo2 from "../../images/logo2.png";

const HeroSection = () => {
  const [status, setStatus] = useState(true);
  const info1 = {
    bannerLogo: bannerLogo,
    logo2: logo2,
    headline1: headline1,
    text1: "Book Gift Ideas",
    text2: " Fine The Perfect Gift For Everyone On Your List",
    books: books,
    bg: "rgb(0,69,62)",
  };
  const info2 = {
    bannerLogo: bannerLogo,
    // logo2: logo2,
    headline1: headlinePart2,
    text1: "All Ages",
    text2: "Buy Your Books In A Store",
    books: book2,
    bg: "rgb(58,106,36)",
  };

  return (
    <div className="hero-container position-relative d-flex justify-content-center align-items-center flex-column">
      {status ? (
        <HeroBanner1 info={info1} ShowOffer={false} />
      ) : (
        <HeroBanner1 info={info2} ShowOffer={true} />
      )}

      <div className="d-flex tab-btn-container">
        <div className="tab-btn-circle">
          <div className="tab-button" onClick={() => setStatus(true)}></div>
        </div>
        <div className="tab-button ms-2" onClick={() => setStatus(false)}></div>
      </div>
    </div>
  );
};

export default HeroSection;
