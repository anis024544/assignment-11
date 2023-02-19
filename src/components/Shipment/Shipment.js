import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
    const [user]= useAuthState(auth)
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [address, setAddress]=useState('');
    const [phoneNumber, setPhoneNumber]=useState('');
    const [error, setError]=useState('');
    // const navigate = useNavigate();
   
    

    const handleNameBlur = (event)=>{
        setName(event.target.value)
    };
   ;

    const handleAddressBlur = (event)=>{
        setAddress(event.target.value);
    };


    const handlePhoneNumberBlur = (event)=>{
        setPhoneNumber(event.target.value)
    };

   


    const handleCreateUser = (event)=>{
        event.preventDefault();
       const shippingInfo ={name, email,address,phoneNumber}
       console.log(shippingInfo)
    }





  return (
    <div className="form-container">
      <div>
        <h2 className="form-title text-center">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-groups">
            <div>
              <label htmlFor="name">Your Name</label>
            </div>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-groups">
            <div>
              <label htmlFor="email">Your Email</label>
            </div>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-groups">
            <label className="d-block" htmlFor="address">
             Your Address
            </label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-groups">
            <label className="d-block" htmlFor="phone">
             Your Phone Number
            </label>
            <input
              onBlur={handlePhoneNumberBlur}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
