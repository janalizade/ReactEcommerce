import React from 'react'
import { useSelector,useDispatch } from 'react-redux';


export default function Cart(){
    
  const itemsobj=useSelector(store=>store.cartsReducer)
  const dispatch=useDispatch()
   const itemslist=itemsobj.cartitems
   const itemsdata=itemslist.map((item)=>{
      console.log('itemname'+item.itemName);
        return<tr>
          
        <td>{item.itemName}</td>
        <td>{item.itemPrice}</td>
        <td><button  className="btn btn-danger" onclick={()=>{dispatch({type:'DELETE_ITEM_TO_CART',payload:item})}}>DELETE</button></td>
     </tr>

  })
  

return(
     <div className='row justify-content-center'>
         <table className='table table-dark table-bordered col-md-8 mt-5'>
         <thead>
          <tr>
             <th>Item Name</th>
             <th>Item Price</th>
             <th>Action</th>
          </tr>
          </thead>
        
         <tbody className='table table-dark table-bordered col-md-8 mt-5'>{itemsdata}</tbody>
         </table>
     </div>
 )
}
