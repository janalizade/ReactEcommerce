import React, { Component, useEffect,useState } from 'react';
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import {useDispatch,useSelector} from 'react-redux'
import './Items.css'
import './Additem'
import './Cart'
import Item from './Item'
import Cart from './Cart'; 

export default function Items(){
  const [state, setstate] = useState({data:""}) 
  const itemsobj=useSelector(store=>store.itemsReducer)
  const [itemslist,setitemslist]=useState(itemsobj.items)
  
 
   
  const [inputValue, setInputValue] = useState('');
   function filtereditems(){
      const newlist=itemsobj.items
     const filter=newlist.filter(item=>item.itemName.toLowerCase().includes(inputValue.toLowerCase()))
      setitemslist(filter)
    }
   const itemsdata=itemslist.map((item)=>{
    return <div className='col-md-4'>


    <div  className="shadow p-3 mb-3 bg-white rounded">
      
      <h1>{item.itemName}</h1> 
      <img src={item.itemImage}   className='img-fluid'/>
      <h1>{item.itemPrice}/-</h1>
      <br/>
      <a  className="btn btn-primary" href='./cart' >ADD TO CART </a>
     
       </div>
   </div>

   })
   return (

    <div className='container' >
     <input
                type="text" 
                id="passwordField"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search Items" onKeyUp={filtereditems}
              />
       
        
        <div className='row'>
            {itemsdata}
        </div>
    </div>

   )
}
