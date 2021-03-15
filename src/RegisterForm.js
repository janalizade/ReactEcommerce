import React,{useState} from 'react'
function RegisterForm(){
  const[username,setusername]=useState('')
  function checkUser(event){
            event.preventDefault()
     
      var user={
          username:username
      }
      console.log(user);
      
  }
    return(
        <form onSubmit={checkUser}>
        <div>
          <h1>React Form</h1>
          <input
                type="text" 
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="username" 
              /> 
          <input type="submit" onClick={checkUser}/>
        </div>
        
        </form>
    )

  }


export default RegisterForm