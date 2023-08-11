import React, { useState } from 'react'
import { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { AuthContext } from '../../context/Auth.context'
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const [userData,setUserData] = useState({email:"",password:""})
    const {state,Login} = useContext(AuthContext);
    const router = useNavigate();

    console.log(state,"14");

    const handleChange =(event) => {
        setUserData({...userData,[event.target.name]:event.target.value})
    }
    // console.log(userData,"17");
    
    const formSubmit = (event) => {
        console.log("hello");
        event.preventDefault();
        // var flag;
        if(userData.email && userData.password){
            const alluser = JSON.parse(localStorage.getItem("AllTodoUser"));
            for(var i = 0;i<alluser.length;i++){
                if(userData.email == alluser[i].email && userData.password == alluser[i].password){
                    // flag = true;
                    localStorage.setItem("TodoCurrentUser",JSON.stringify(alluser[i]))
                    Login(alluser[i])
                    toast.success("Login Successfull");
                    router("/");
                    break;
                }
                else{
                    toast.error("Email or password is inccoret");
                    break;
                }
            } 
        }
        else{
            toast.error("Please fill all details")
        }

    } 


    return (
        <div className='login-body'>
            <div className='inside-login-body'>
                <form onSubmit={formSubmit}>
                    <input type='email' name='email' className='inputForm-login' placeholder='Enter Email' onChange={handleChange} />
                    <input type="password" name='password' className='inputForm-login' placeholder='Enter Password' onChange={handleChange} />
                    <input type="submit" className='inputButton-login' value="Login" />
                </form>
                <p className='create-account-para-css'>To Create account <span className='create-account-css' onClick={()=>router('/register')}><b>Click here</b></span></p>
            </div>
        </div>
    )
}

export default Login