import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { AuthContext } from '../../context/Auth.context';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const { state, Login, Logout } = useContext(AuthContext);
    const router = useNavigate();
    const [userdata, setuserdata] = useState();
    const [isuserpresent,setuserpresent] = useState(false);

    // console.log(state);
    // console.log(userdata, "13");

    useEffect(() => {
        // const currentuser = JSON.parse(localStorage.getItem("TodoCurrentUser"))
        if (state?.user) {
            setuserdata(state?.user)
            setuserpresent(true);
        }
        else{
            setuserdata({})
        }
    },[state])

    return (
        <div className='navbar-body'>
            <div className='navbar-logo'>
                <h1>Logo</h1>
            </div>
            <div className="navbar-menu">
                {userdata?.email ? <p>{userdata.name}</p> : <p onClick={()=>router('/login')}>Login</p>}
                {isuserpresent && <p onClick={()=>router('/add-todo')}>Create Todo</p>}
                <p onClick={()=>router('/all-todo')}>All Todos</p>
                <p>Own Todos</p>
                {userdata?.email && <p onClick={Logout}>Logout</p> }
            </div>
            
        </div>
    )
}

export default Navbar
