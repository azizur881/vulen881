import React, { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Data from '../../fakeData/users'
const Item = () => {
    const select = Data.slice(0,1)
    const [selected ,setSelected] = useState(select)

        return (
            <div>
       <h1>You have selected {selected.length}</h1>
            <ul>
                {
                    selected.map(item =>
                         <img style={{width:"100px",height:"auto",margin:"40px"}}src={item.img} alt=""/> 
                    )
                }
                {
                    selected.map(item =>
                    <h3>{item.name}</h3> )
                }
            </ul>
        </div>
    );
};

export default Item;