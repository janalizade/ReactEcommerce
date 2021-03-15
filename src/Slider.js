import React from 'react';
import banner from './images/banner-2.jpg';
import right from './images/arrow-p.png';
import left from './images/arrow-pleft.png';
import logo from './images/logo.png';
import l1 from './images/1.jpg';
import l2 from './images/2.jpg';
import l3 from './images/3.jpg';

import './Slider.css';



class Slider extends React.Component {
 constructor(){
    super();
    this.state={
       number:0 
     
    }
    this.state={
      imagePath:'./images/1.jpg'

    }

}
  
  callfun=()=>{
     alert('Image is clicked');
  }  
  
  
 /*  add=()=>{
    this.setState({number:this.state.number+1}) 
    }
 subtract=()=>{
    this.setState({number:this.state.number-1}) 
    
    }*/
 render(){
    return (
     <React.Fragment>
        <button value="John Doe"onClick={() =>this.setState({number:this.state.number+1}) }>
       
        Click Here
      </button>
      <p>{this.state.imagePath}</p>
    <div><img src={banner} alt="" style={{width: "1200px"}}/></div>      
    <div><img id="right" src={right}  alt="" onClick={this.callfun} /></div>
     </React.Fragment>
          
        
              
      
        );
  
     
   
  }
}

export default Slider;