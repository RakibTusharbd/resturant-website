import React from 'react';
import resturantLogo from '../../../src/assets/resturanLogo.png'
import './Footer.css'
import { FaFacebook,FaInstagram,FaTwitter,FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className='eyasa p-5'>
           <div className='one'>
            <img src={resturantLogo} alt="" />
            <p className='text-white font-weight-bolder'>Some restaurants specialize in certain <br /> types of food,  such as seafood, steak, <br /> or vegetarian options.</p>
           </div>
           <div className='two'>
            <h4 className='fw-bolder text-white'>Office</h4>
            <p className='fw-bolder text-white'>IPL Road <br />Dhaka,Bangladesh <br />Karnakata PIN: 800 <br />Dhaka</p>
            <a href="#">tushar@gmail.com</a>
            <p className='text-white mt-2'>+0179345456</p>
            </div>
            <div className='three'>
                <h4 className='fw-bolder mb-3 text-white'>Links</h4>
                <div className='toka text-white font-weight-bolder'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Contact</p>
                <p>Ferauts</p>
                </div>
            </div>
            <div className='four'>
                <h5 className='fw-bolder mb-3 text-white'>NewSelter</h5>
                <form>
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' required/>
                </form>
                <div className="anisa m-2">
                    <span><FaFacebook></FaFacebook></span>
                    <span><FaTwitter></FaTwitter></span>
                    <span><FaWhatsappSquare></FaWhatsappSquare></span>
                    <span><FaInstagram></FaInstagram></span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;