import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';



const CartDetails = () => {
    const [personInfo, setPersonInfo]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setPersonInfo(data))
        // .then(data=>console.log(data))
    },[])


    const {CartId}= useParams()
    return (
        <div>
            <h1>This is CartDetails{CartId}</h1>
            <h1>This is CartDetails{personInfo.length}</h1>
           <ul>
              {
                 personInfo.map(p=><li key={p.id}>Name: {p.name}, profession: {p.profession}</li>)
              }
           </ul>
        </div>
    );
};

export default CartDetails;