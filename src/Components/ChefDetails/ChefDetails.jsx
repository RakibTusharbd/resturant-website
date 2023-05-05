import React from 'react';
import './ChefDetails.css'
import chef from '../../../src/assets/shafe.jpg'


const ChefDetails = () => {
    return (
        <div className='Chef-details '>
           <div className='info'>
           <div>
           <img src={chef} alt="" />
           <h4 className='text-white fw-bolder'>Chef Name: Tushar Ahammed</h4>
           </div>
           <div>
            <h2 className='fw-bolder text-primary'>Chef List:</h2>
                <li>Panera Soup</li>
                <li>KFC</li>
                <li>Guys Fries</li>
                <li>Chicken Fries</li>
                <li>Burger</li>
            </div>
           </div>
           </div>
    );
};

export default ChefDetails;