import { Button, Link } from '@material-ui/core';
import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Details.css'

const Details = () => {
    const [loggedInUser , setLoggedInUser] =  useContext(UserContext)
    const {volunteer} = useParams();
    const handleSubmit = ()=>{
      const  newRegistration = {...loggedInUser}
      fetch('http://localhost:5000/addVolunteer',{
          method:"POST",
          headers:{"Content-Type":'application/json'},
          body:JSON.stringify(newRegistration)
      })
      .then(res => res.json())
      .then(data=> console.log(data))
    }
    return (
        <div>
            <div className="registration-form">
                    <form onSubmit={()=>handleSubmit()} >
                        <strong><span>Register as a volunteer</span></strong>
                        <br/>
                        <input  type="text" name="name" className="form-input" value={loggedInUser.name}  required/>
                        <br/>
                        <input  type="email" name="email" className="form-input" value={loggedInUser.email} required/>
                        <br/>
                        <input  type="date" name="date" className="form-input" placeholder="Date" required/>
                        <input  type="text" name="description" className="form-input" placeholder="Description" required/>
                         <input  type="text" name="password" className="form-input" value={volunteer} required/>
                        <br/>
                        <Nav.Link className="submit-btn" href="/item">Submit</Nav.Link>  
                    </form>
                </div>  
                
                 </div>
    );
};

export default Details;