import React from 'react';
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap';
import './Recipi.css'
import { Link } from 'react-router-dom';

const Recipi = ({catagory}) => {
    const {id,name,picture,years_of_experience,number_of_recipes,likes,another} = catagory;
    return (
        <div>
            <Container>
         <Card  className='mb-4 rounded-4' style={{width:'300px'}}>
         <Card.Img  variant="top" style={{width:'298px'}} src={picture} />
         <Card.Body className='bg-secondary text-white'>
         <Card.Title>Chef Name: {name}</Card.Title>
         <Card.Text>
          <p> Exprence: {years_of_experience}</p>
         </Card.Text>
         <p>Total Recipi:{number_of_recipes}</p>
         <div className='d-flex justify-content-between'>
         <p className='mt-3'>Likes:{likes}</p>
         {/* <ButtonGroup> <Link to={`${Links}`}>views recipi</Link></ButtonGroup> */}
         <Button><Link className='bg-primary text-white p-3' to={`${another}`}>views recipi</Link></Button>
         </div>
         </Card.Body>
       </Card>
        </Container>
        </div>
    );
};

export default Recipi;