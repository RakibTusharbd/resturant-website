import React from 'react';
import resturant from '../../../src/assets/resurant.jpg'
import './Section1.css'
const Section1 = () => {
    return (
        <div className='container d-flex justify-content-around align-items-center p-4'>
            <div className='text-area'>
                <h2 className='font-weight-bolder'>Fresh & Faast <br /> Street Food</h2>
                <p>High Professtional Services</p>
                <button className='btn btn-primary'>View Order Now</button>
            </div>
            <div className='img-area'>
                <img src={resturant} alt="" />
            </div>
        </div>
    );
};

export default Section1;