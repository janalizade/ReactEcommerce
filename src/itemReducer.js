const initialData={
   items:[{
     itemName:'Baked salmon with fennel & tomatoes',
     itemImage:'https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg',
     itemPrice:250

   },{
    itemName:'Cajun spiced fish tacos',
    itemImage:'https:\/\/www.themealdb.com\/images\/media\/meals\/uvuyxu1503067369.jpg',
    itemPrice:400

  },{
    itemName:'Escovitch Fish',
    itemImage:'https:\/\/www.themealdb.com\/images\/media\/meals\/1520084413.jpg',
    itemPrice:300


  },{
    itemName:'fofosFish',
    itemImage:'https:\/\/www.themealdb.com\/images\/media\/meals\/a15wsa1614349126.jpg',
    itemPrice:200


  },{
    itemName:'Fish pie',
    itemImage:'https:\/\/www.themealdb.com\/images\/media\/meals\/ysxwuq1487323065.jpg',
    itemPrice:300


  },{
    itemName:' Fish Stew with Rouille',
    itemImage:'https:\/\/www.themealdb.com\/images\/media\/meals\/vptqpw1511798500.jpg',
    itemPrice:300


  }
 
]



}
function itemReducer(state=initialData,action){
  
  switch(action.type)
  {
    case 'ADD_ITEM':return{
        ...state,
        items:[...state.items,action.payload]

    }
    case 'DELETE_ITEM':
        
    return{
      ...state,
        items:state.items.filter(item=>item.itemName!=action.payload.itemName)
  }   
  } 
  
  
  return state
}
export default itemReducer