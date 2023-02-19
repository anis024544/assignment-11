import React from "react";
import "./ReviewSection.css";
import { AiFillStar } from "react-icons/ai";
import { BiStar } from "react-icons/bi";

const ReviewSection = () => {
  const reviewItems = [
    {
      title: "Barone LLC",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-7.jpg",
      stars: [<AiFillStar />,<AiFillStar />,<AiFillStar />,<AiFillStar />,<BiStar />,],
      count:6
    },
    {
      title: "Gregstore ",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-8.jpg",
      stars: [<AiFillStar />,<AiFillStar />,<AiFillStar />,<AiFillStar />,<BiStar />,],
      count:3
    },
    {
      title: "Arlene",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-9.jpg",
      stars: [<AiFillStar />,<AiFillStar />,<AiFillStar />,<AiFillStar />,<BiStar />,],
      count:8
    },
    {
      title: "Book House",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/store-5.jpg",
      stars: [<AiFillStar />,<AiFillStar />,<AiFillStar />,<AiFillStar />,<BiStar />,],
      count:8
    },
  ];
  return (
    <div>
      <div className="d-flex  mt-3 justify-content-center align-items-center px-5 mx-5">
        {reviewItems.map(item=>
        
        <div className=" review-part d-flex justify-content-between align-items-center p-2  ">
             <img src={item.img} alt="" />
            <div className="rating-section">
            <h5 className="w-75">{item.title}<span className="products-count">({item.count} products)</span></h5>
            <h6 className="text-warning">{item.stars}</h6>
            </div>
        </div>)
      
      }</div>
    </div>
  );
};

export default ReviewSection;
