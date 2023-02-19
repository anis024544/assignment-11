import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiStar } from 'react-icons/bi';
import Child from './Child';
import './Test.css'

const Test = () => {
    const favorites = [
        {
          id: 1,
          img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/35.jpg",
          title: "Rich Dad Poor Dad",
          stars:  [
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <BiStar />,
          ],
          author: "Misty Figueroa",
          price: "170.03",
        },
        {
          id: 2,
          img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/34.jpg",
          title: "The Story of Success",
          stars: [
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <BiStar />,
          ],
          author: "Arthur Gonzalez",
          price: "50.89",
        },
        {
          id: 3,
          img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg",
          title: "Annie Leibovitz:...",
          stars: [
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <BiStar />,
          ],
          author: "Arthur Gonzalez",
          price: "50.89",
        },
        {
          id: 4,
          img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg",
          title: "My Dearest Darkest",
          stars: [
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <BiStar />,
            <BiStar />,
          ],
          author: "Enrique Wallace",
          price: "914.53",
        },
        {
          id: 5,
          img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/31.jpg",
          title: "House of Sky and Breath",
          stars: [
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <BiStar />,
            <BiStar />,
          ],
          author: "Ernesto Wade",
          price: "90.53",
        },
        
        {
          id: 6,
          img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/30.jpg",
          title: "Surrounded by Idiots",
          stars: [
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <BiStar />,
            <BiStar />,
          ],
          author: "Georgia Ramirez",
          price: "214.53",
        },
        {
          id: 7,
          img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/29.jpg",
          title: "Treachery: Alpha Colony...",
          stars: [
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <BiStar />,
            <BiStar />,
          ],
          author: "Jessica Munoz",
          price: "114.53",
        },
        {
          id: 8,
          img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/28.jpg",
          title: "A Crown of Petals and Ice",
          stars: [
            <AiFillStar />,
            <AiFillStar />,
            <AiFillStar />,
            <BiStar />,
            <BiStar />,
          ],
          author: "Karla Newman",
          price: "314.53",
        },
        
        
       
      ];
    
    return (
        <div className='test-container'>
      
            {
               favorites.map((info, index)=><Child  info={info} index={index+1}/>)
            }
        </div>
    );
};

export default Test;