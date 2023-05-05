import React from 'react';
import './Carousel.css'
import { Carousel } from 'react-bootstrap';
import logo from '../../../src/assets/img1.jpg'
import logo1 from '../../../src/assets/img2.jpg'
import logo2 from '../../../src/assets/img3.png'

const Caroulel = () => {
    return (
        <div>
             <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo}
          style={{height:'560px'}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo1}
          style={{height:'560px'}}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo2}
          style={{height:'560px'}}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Caroulel;