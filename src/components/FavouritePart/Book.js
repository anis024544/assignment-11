import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Book = ({ item, idx, handleAddToCart, addedItem }) => {
  const str =  Array(item.str).fill(0) ;
  // const str =  [0,0,0,0,0] ;
  return (
    <div className="book-item ">
      <div className={idx % 4 === 0 ? "without-border" : "with-border"}>
        {/*1=> <div className={idx % 4 === 0 ?  "without-border":"with-border" }>
      <div className={idx % 4 === 0 ?  "without-border":"with-border" }>
      <div className={idx % 4 === 0 ?  "without-border":"with-border" }>
      <div className={idx % 4 === 0 ?  "without-border":"with-border" }>
      <div className={idx % 4 === 0 ?  "without-border":"with-border" }> */}
        <img src={item.img} alt="" />
        <h5>{item.title}</h5>
        <h6>{str.length}</h6>
        {/* <h6>{item.stars}</h6> */}
        <h6>
          {str.map((st) => (
            <AiFillStar />
          ))}{" "}
        </h6>
        <p>{item.author}</p>
        <h4>$ {item.price}</h4>

        <button
          onClick={() => handleAddToCart(item)}
          className="addToCart-btn btn btn-primary"
        >
          {addedItem.includes(item._id) ? " Added" : " Add to cart"}
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Book;
