import React from "react";
import { AiOutlineDown} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeInfo from "./HomeInfo";

const Home = () => {
  const homeInfo = [
    { label: "Home", dropLinks: ["Home 1", "Home 2", "home 3"] },
    { label: "Shop", dropLinks: ["About 1", "About 2", "About 3"] },
    { label: "Vendor", dropLinks: ["Email 1", "Email 2", "Email 3"] },
    { label: "Pages", dropLinks: ["Email 1", "Email 2", "Email 3"] },
    { label: "Blogs", dropLinks: ["Email 1", "Email 2", "Email 3"] },
    { label: "Contact", dropLinks: ["Email 1", "Email 2", "Email 3"] },
  ];
  return (
    <div>
      <div className="Home-container d-flex justify-content-center align-items-center mt-5 position-relative" >
      {homeInfo.map((item,index) =><HomeInfo  item={item} index={index}/>)}   
    </div>
      <div className="bg-warning d-flex justify-content-center align-items-center">
      <div className="position-absolute login-btn"><Link to='/login'><h4>Login</h4></Link></div>
      <div className="login-btn"><Link to='/addBook'><h4>Add a Book</h4></Link></div>
      </div>
    </div>
  );
};

export default Home;
