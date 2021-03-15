/*const initialData={
  cartitems:[{
    itemName:'Baked salmon with fennel & tomatoes',
    itemImage:'https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg',
    itemPrice:250

  },{
   itemName:'Cajun spiced fish tacos',
   itemImage:'https:\/\/www.themealdb.com\/images\/media\/meals\/uvuyxu1503067369.jpg',
   itemPrice:400

 }]
}


function cartReducer(state=initialData,action)
{
  switch(action.type)
  {
  
   case 'ADD_ITEM_TO_CART':   
     return{...state,
        cartitems:[...state.cartitems,action.payload]
    }
    case 'DELETE_ITEM_TO_CART':return{
      ...state,
      cartitems:state.cartitems.filter(item=>item.itemName!=action.payload.itemName)
  }   
    
  }
   return state
}
export default cartReducer
*/
const initialData={
  cartitems:[{
    itemName:'Cajun spiced fish tacos',
    itemImage:'https:\/\/www.themealdb.com\/images\/media\/meals\/uvuyxu1503067369.jpg',
    itemPrice:400

  }]
}
function cartReducer(state=initialData,action){
  

 switch(action.type)
 {
  case 'ADD_ITEM_TO_CART':   
     return{...state,
        cartitems:[...state.cartitems,action.payload]
    }
    case 'DELETE_ITEM_TO_CART':return{
      ...state,
      cartitems:state.cartitems.filter(item=>item.itemName!=action.payload.itemName)
  }   
 } 

 
 return state
}
export default cartReducer