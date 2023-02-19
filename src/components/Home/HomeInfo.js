import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const HomeInfo = ({item,index}) => {
    return (
        <div>
            <div className="dropdown" key={index}>
          <button className="dropbtn">{item.label}<AiOutlineDown/></button>
          <div className="d-flex justify-content-center"><span className="dot-circle"></span></div>
          <div className="dropdown-content">
            {item.dropLinks.map((link, index) => (
              <a href="#" key={index}>{link}</a>
            ))}
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
          
        </div>
        
        </div>
    );
};

export default HomeInfo;