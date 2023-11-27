import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Header(props) {
  var {username,role} = JSON.parse(window.localStorage.getItem("user"));
  // var [isLoggedIn,setisLoggedIn] = useState(false)
  var navigate = useNavigate()

  function signOut(){
    // setisLoggedIn(true);
    window.localStorage.removeItem("user");
    navigate('/login');
  // console.log(username);
    

  }
  console.log(props.isLoggedIn);
  return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    {
                      username ? (<a class="nav-link" onClick={()=>{signOut()}}>LogOut</a>) : (<a class="nav-link" >Login</a>)
                    }
                    </li>
                </ul>
                </div>
            </div>
    </nav>
  )
}

export default Header