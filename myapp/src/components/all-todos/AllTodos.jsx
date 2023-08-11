import React, { useEffect, useState } from 'react';
import './AllTodos.css';

const AllTodos = () => {

    const [allTodos,setAllTodos] = useState();
    console.log(allTodos,"7");

    useEffect(()=>{
        const allLocoalTodo = JSON.parse(localStorage.getItem("Todos"))
        if(allLocoalTodo){
            setAllTodos(allLocoalTodo)
        }
    },[])

  return (
    <div className='all-todos-body'>
        {allTodos && allTodos.map((singleTodo)=>{
            
        })}
    </div>
  )
}

export default AllTodos
