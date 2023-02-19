import React from "react";
import { Nav } from "react-bootstrap";
import "./Header.css";
import { BsFacebook, BsPinterest} from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user]= useAuthState(auth);
  const handleSignOut = ()=>{
        signOut(auth)
  }
  return (
    <div className=" nav-container">
      <div className="nav-links">
        <Nav>
          <Nav.Item>
            <Link to="/about">About Us</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/myAccount">My Account</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/wishlist">Wishlist</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="order">Order Tracking</Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Link to="order">{user? 'Sign out':'Sign in'}</Link> */}
            {
            user? <button className={user?'Sign-out':'Sign-in'} onClick={handleSignOut}>Sign Out</button>:<Link to='/login'>Login</Link>
            }
          </Nav.Item>
        </Nav>
      </div>
      <div className=" social-links">
      <a href="http://facebook.com" target="_blank" ><BsFacebook></BsFacebook></a>
      <Link to='/twitter'><AiFillTwitterCircle ></AiFillTwitterCircle></Link>
      <Link to='/instagram'><AiFillInstagram ></AiFillInstagram></Link>
      <Link to='/pinterest'><BsPinterest ></BsPinterest></Link>
      </div>
    </div>
  );
};

export default Header;
