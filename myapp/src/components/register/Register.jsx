import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
    // console.log("hello");

    const [userData,setUserData] = useState({name:"",email:"",password:""});
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({...userData,[event.target.name]:event.target.value})
    }

    const formSubmit = (event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password){
            const userArray = JSON.parse(localStorage.getItem("AllTodoUser")) || [];
            const userObj = {
                name:userData.name,
                email:userData.email,
                password:userData.password,
                todo:[]
            }
            userArray.push(userObj);
            localStorage.setItem("AllTodoUser",JSON.stringify(userArray));
            toast.success("Registeration Successful")
            router('/login')
        }
        else
        {
            toast.error("please fill all details")
        }

    }
    return (
        <div className='register-body'>
            <div className='inside-register-body'>
                <form onSubmit={formSubmit}>
                    <input type="text" name="name" className='inputForm' placeholder='Enter Name' onChange={handleChange} />
                    <input type='email' name='email' className='inputForm' placeholder='Enter Email' onChange={handleChange} />
                    <input type="password" name='password' className='inputForm' placeholder='Enter Password' onChange={handleChange} />
                    <input type="submit" className='inputButton' value="Register" />
                </form>
                <p>Already have account <span className='already-account-css' onClick={()=>router('/login')}><b>Login here</b></span></p>
            </div>
        </div>
    )
}

export default Register
