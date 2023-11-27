import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useLazyAuthenticateuserQuery } from '../../services/userapi';
import { useNavigate } from 'react-router-dom';
import Header from '../landing/Header';

function Login() {
  var [loginFn] = useLazyAuthenticateuserQuery();
  var [isLoggedIn, setisLoggedIn] = useState(false)
  var navigate = useNavigate();
  
  const loginForm = useFormik({
    initialValues : {username:"", password:""},

    onSubmit: values =>{
      // alert(JSON.stringify(values));
      loginFn(values).then(res=>{
        window.localStorage.setItem("user",JSON.stringify(res.data))
        // alert(JSON.stringify(res.data[0]));
        if(res.data.length == 0){
          alert("Please Enter a valid username and password")
        }
        else{
          setisLoggedIn(true);
          navigate("/dashboard");
        }
      })
    }
  })

  return (
    <div className='container-fluid'>
      <span>Login</span>
      <form onSubmit={loginForm.handleSubmit}>
        <label for="username">userName:</label>&nbsp;&nbsp;
        <input type='text' name='username' onChange={loginForm.handleChange}></input><br/><br/>
        <label for="password">password:</label>&nbsp;&nbsp;
        <input type='text' name='password' onChange={loginForm.handleChange}></input><br/><br/>
        <button>Login</button>
      </form>
      {/* <Header isLoggedIn = {isLoggedIn}/> */}
    </div>
    
    
  )
}

export default Login