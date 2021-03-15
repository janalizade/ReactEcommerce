import logo from './logo.svg';
import './App.css';
import {React,useState} from 'react';
import Items from './Items';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Additem from './Additem';
import Cart from './Cart'
import {Provider} from  'react-redux'
import { createStore} from 'redux';
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer';
import { PersistGate } from 'redux-persist/integration/react';
import RegisterForm from './RegisterForm';
function App() {
   const persistConfig={
     key:'root',
     storage
   }
   const persistedReducer=persistReducer(persistConfig,rootReducer)
   const store=createStore(persistedReducer)
   const persistor=persistStore(store)
 
  return (
    <div className="App"  align="center">
         <Provider store={store}>
         <PersistGate persistor={persistor}>
        <Navbar/> 
        <Router>
        
        <Switch>
            
            <Route exact path='/'component={Items} exact/>
            <Route path='/Additem' component={Additem} exact/>
            <Route path='/Cart' component={Cart} exact/>
        </Switch>
    
    </Router>
    </PersistGate>
    </Provider>
      </div>
  );
}

export default App;


