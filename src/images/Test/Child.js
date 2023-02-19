import React from 'react';

const Child = ({info, index}) => {
    return (
        <div>
            <div className='book-items'>
            <div className={index % 4 === 0 ?  "without-borders":"with-borders"}>
                {/* <img src={info.img} alt="" /> */}
            </div>
            </div>
        </div>
    );
};

export default Child;