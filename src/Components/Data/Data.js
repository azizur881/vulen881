import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Data = (props) => {
    const {img , name} = props.data
    return (
            <div className="col-md-3 ">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body style={{backgroundColor:'rgba(255, 112, 68, 1)' , marginBottom:"10px",borderRadius:'8px'}}>
  <Link style={{color:"white",textDecoration:"none"}} to ={'/volunteer/'+ name}>  <Card.Title>{name}</Card.Title></Link>
  </Card.Body>
</Card>
      </div>
    );
};
export default Data;