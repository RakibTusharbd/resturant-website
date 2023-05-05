import React from 'react';
import close from '../../../src/assets/close.png'

const Errorpage = () => {
    return (
        <div className='text-center'>
            <img style={{width:'170px'}} src={close} alt="" />
            <h4 className='fw-bolder'>404 is not found</h4>
        </div>
    );
};

export default Errorpage;