import { combineReducers } from 'redux';
import cartReducer from './cartReducer'
import itemReducer from './itemReducer'
const rootReducer =combineReducers({
    itemsReducer:itemReducer,
    cartsReducer:cartReducer
})
export default rootReducer