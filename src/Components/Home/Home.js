import React from 'react';
import Header from '../Header/Header';
import fakeData from '../../fakeData/users'
import Data from '../Data/Data';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Home.css'
import Item from '../Item/Item';


const Home = () => {
    return (
        <div className="row">
            <h1 className="heading-title">I GROW BY HELPING PEOPLE IN NEED.</h1>
<div className="header-search">
<InputGroup className="mb-3">
    <FormControl
      placeholder="Search..."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button>Search</Button>
    </InputGroup.Append>
  </InputGroup>
</div>
        
        {
            fakeData.map(data => <Data data={data}></Data>)
        }
        </div>
    );
};

export default Home;