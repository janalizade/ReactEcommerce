import React from 'react'
import {useSelector}from 'react-redux'
import Additem from './Additem';
import cartReducer from './cartReducer';
 function Navbar(){
   
      const itemsobj=useSelector(store=>store.itemsReducer)
      const itemslist=itemsobj.items
        return( <div style={{backgroundColor:'brown'}} >
            <h1>React Meals</h1>
            <ul id="nav">
            <a href="/" style={{margin:'10px',color:'white'}}>Home </a>
            <a href="/Additem" style={{margin:'10px',color:'white'}} >New Item</a>
            <a href="/cart" style={{margin:'10px',color:'white'}} >Cart {itemslist.length}</a>
             </ul>
          </div>
        );
        

}
export default Navbar