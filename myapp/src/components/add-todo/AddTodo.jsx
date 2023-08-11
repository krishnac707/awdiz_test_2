import React, { useEffect, useState } from 'react';
import './AddTodo.css';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';

export const AddTodo = () => {

    const [addTodo,setAddTodo] = useState({subject:"",description:""});
    const [userdata,setuserdata] = useState();

    const handleChange = (event) => {
        setAddTodo({...addTodo,[event.target.name]:event.target.value})
    }

    const formSubmit = (event) => {
        event.preventDefault();
        if(addTodo.subject && addTodo.description){
            const todoArray = JSON.parse(localStorage.getItem("Todos")) || [];
            const randomId = uuidv4();
            addTodo["id"] = randomId;
            todoArray.push(addTodo);
            localStorage.setItem("Todos",JSON.stringify(todoArray));
            toast.success("Todo added Successfully");
            setAddTodo({subject :"",description:""});
        }
        else{
            toast.error("please fill all details");
        }
    }

    return (
        <div className='add-todo-body'>
            <div className="inside-add-todo-body">
                <form onSubmit={formSubmit}>
                    <input type='text' value={userdata?.subject} name='subject'  className='inputForm-add-todo' placeholder='Enter Subject' onChange={handleChange} />
                    <input type="text" value={userdata?.description} name='description' className='inputForm-add-todo' placeholder='Add Description' onChange={handleChange} />
                    <input type="submit" className='inputButton-add-todo' value="Add Todo" />
                </form>
            </div>
        </div>
    )
}
