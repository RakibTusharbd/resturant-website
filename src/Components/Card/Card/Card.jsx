import React, { useEffect, useState } from 'react';
import Recipi from '../Recipi/Recipi';

const Card = () => {
    const [categoris,SetCategoris] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/categoris')
        .then(res => res.json())
        .then(data => SetCategoris(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div className='d-flex justify-content-around   p-3 flex-wrap'>
          {
            categoris.map(catagory => <Recipi key={catagory.id} catagory={catagory}></Recipi>)
          }
        </div>
    );
};

export default Card;