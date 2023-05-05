import React from 'react';
import './Section2.css'
import resturant1 from '../../../src/assets/resturant1.jpg'

const Section2 = () => {
    return (
        <div className='container d-flex justify-content-around align-items-center p-4'>
             <div className='img-area1'>
                <img src={resturant1} alt="" />
            </div>
            <div className='text-area1'>
            <h2 className='font-weight-bolder'>Fresh & Faast <br /> Street Food</h2>
                <p>High Professtional Services</p>
                <button className='btn btn-primary'>View Order Now</button>
           </div>
        </div>
    );
};

export default Section2;