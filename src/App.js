import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBook from "./components/AddBook/AddBook";
import BooksCarousel from "./components/BooksCarousel/BooksCarousel";
import Cart from "./components/Cart/Cart";
import CartDetails from "./components/CartDetails/CartDetails";
import DisplayOffer from "./components/DisplayOffer/DisplayOffer";
import FavouritePart from "./components/FavouritePart/FavouritePart";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Home from "./components/Home/Home";
import Main from "./components/Layouts/Main";
import Login from "./components/Login/Login";

import OfferBanner from "./components/OfferBanner/OfferBanner";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import SearchArea from "./components/SearchArea/SearchArea";
import Shipment from "./components/Shipment/Shipment";
import SignUp from "./components/SignUp/SignUp";

import TopVendor from "./components/TopVendor/TopVendor";
import Test from "./images/Test/Test";


export const RingContext = createContext();

function App() {
  const [books, setBooks] = useState([]);
  const [crt, setCrt] = useState([]);
  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <RingContext.Provider value={[crt, setCrt]}>
      <div>
        {/*
      
       
         */}
          
        {/* <TopVendor /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shipment" element={<RequireAuth><Shipment /></RequireAuth>} />
          <Route path="/shoppingCart" element={<Cart />} />
          <Route path="/CartDetail/:CartId" element={<CartDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="addBook" element={<AddBook></AddBook>}></Route>
        </Routes>
      </div>
    </RingContext.Provider>
  );
}

export default App;
