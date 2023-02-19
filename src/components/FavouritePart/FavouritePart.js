import "./FavouritePart.css";
import { AiFillStar, AiOutlineRight } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import Book from "./Book";
import { useContext, useEffect, useState } from "react";
import { RingContext } from "../../App";

const FavouritePart = () => {
 const [books, setBooks]= useState([]);

  // const [crt, setCrt] = useState([]);
  const [crt, setCrt] = useContext(RingContext);
  const [addedItem, setAddedItem] = useState([]);

  const handleAddToCart = (item) => {
    const exists = crt.find((pd) => pd._id === item._id);
    let newCart = [];
    if (exists) {
      const rest = crt.filter((pd) => pd._id !== item._id);
      exists.stock = exists.stock + 1;
      newCart = [...rest, exists];
    } else {
      item.stock = 1;
      newCart = item;
      newCart = [...crt, item];
    }
    setAddedItem([...addedItem, item._id]);
    setCrt(newCart);
  };

  const handChangeBtnText = () => {
    console.log("clicked");
  };

  useEffect(()=>{
 const url ='http://localhost:5000/favoriteBook'
 fetch(url)
 .then(res=>res.json())
 .then(data=>setBooks(data))
  
  },[])

  // const favorites = [
  //   {
  //     str: 5,
  //     img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/35.jpg",
  //     title: "Rich Dad Poor Dad",
  //     stock: 1,
  //     author: "Misty Figueroa",
  //     price: "170.03",
  //   },
  //   {
  //     str: 5,
  //     img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/34.jpg",
  //     title: "The Story of Success",
  //     stock: 1,
  //     author: "Arthur Gonzalez",
  //     price: "50.89",
  //   },
  //   {
  //     str: 5,
  //     img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg",
  //     title: "Annie Leibovitz:...",
  //     stock: 1,
  //     author: "Arthur Gonzalez",
  //     price: "50.89",
  //   },
  //   {
  //     str: 5,
  //     img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg",
  //     title: "My Dearest Darkest",
  //     stock: 1,
  //     author: "Enrique Wallace",
  //     price: "914.53",
  //   },
  //   {
  //     str: 5,
  //     img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/31.jpg",
  //     title: "House of Sky and Breath",
  //     stock: 1,
  //     author: "Ernesto Wade",
  //     price: "90.53",
  //   },

  //   {
  //     str: 3,
  //     id: 6,
  //     img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/30.jpg",
  //     title: "Surrounded by str:5,idiots",
  //     stock: 1,
  //     author: "Georgia Ramirez",
  //     price: "214.53",
  //   },
  //   {
  //     str: 5,
  //     id: 7,
  //     img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/29.jpg",
  //     title: "Treachery: Alpha Colony...",
  //     stock: 1,
  //     author: "Jessica Munoz",
  //     price: "114.53",
  //   },
  //   {
  //     str: 5,
  //     img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/28.jpg",
  //     title: "A Crown of Petals and Ice",
  //     stock: 1,
  //     author: "Karla Newman",
  //     price: "314.53",
  //   },
  // ];
  return (
    <div>
      {/* {cart.map((item) => console.log(item.stock))} */}
      <div className="d-flex align-items-center justify-content-between mt-5  px-5">
        <div className="TopVendorText">
          <h1>Our Favourite Reads {crt.length}</h1>
        </div>
        <div className="border-line"></div>
        <div>
          <button className="Top-Vendor-btn">
            View All <AiOutlineRight />
          </button>
        </div>
      </div>
      <div className="books-container mx-5 px-4 mt-3">
        {books.map((item, index) => (
          <Book
            item={item}
            idx={index + 1}
            handleAddToCart={handleAddToCart}
            handChangeBtnText={handChangeBtnText}
            key={item._id}
            addedItem={addedItem}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouritePart;
