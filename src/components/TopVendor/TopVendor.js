import React from "react";
import "./TopVendor.css";
import { AiOutlineRight } from "react-icons/ai";

const TopVendor = () => {
  const items = [
    {
      img1: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/9.jpg",
      img2: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg",
      img3: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg",
    },
    {
      img1: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/1.jpg",
      img2: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg",
      img3: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg",
    },
    {
      img1: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/28.jpg",
      img2: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg",
      img3: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg",
    },
    {
      img1: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/7.jpg",
      img2: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg",
      img3: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg",
    },
  ];
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mt-5 px-5">
        <div className="TopVendorText">
          <h1>Top Selling Vendor</h1>
        </div>
        <div className="border-line"></div>
        <div>
          <button className="Top-Vendor-btn">
            View All <AiOutlineRight />
          </button>
        </div>
      </div>
      {/* Top selling vendor title ends here */}

      {/* Top selling vendor brand image start here */}
      <div className="d-flex justify-content-center align-items-center">
        {items.map((info) => (
          <div className="d-flex">
            <div className="Top-vendor-product-images">
              <img
                style={{ height: "250px" }}
                src={info.img1}
                alt=""
              />
            </div>
            <div className="d-flex flex-column Top-vendor-small-image">
              <img
                src={info.img2}
                alt=""
              />
              <img
                src={info.img3}
                alt=""
              />
          
            </div>
          </div>
        ))}
        {/* <div className="d-flex">
          <div className="Top-vendor-product-images">
            <img
              style={{ height: "250px" }}
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/1.jpg"
              alt=""
            />
          </div>
          <div className="d-flex flex-column Top-vendor-small-image">
            <img
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg"
              alt=""
            />
            <img
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="Top-vendor-product-images">
            <img
              style={{ height: "250px" }}
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/28.jpg"
              alt=""
            />
          </div>
          <div className="d-flex flex-column Top-vendor-small-image">
            <img
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg"
              alt=""
            />
            <img
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="Top-vendor-product-images">
            <img
              style={{ height: "250px" }}
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/7.jpg"
              alt=""
            />
          </div>
          <div className="d-flex flex-column Top-vendor-small-image">
            <img
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg"
              alt=""
            />
            <img
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg"
              alt=""
            />
          </div>
        </div> */}
      </div>

    </div>
  );
};

export default TopVendor;
