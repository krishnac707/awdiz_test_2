import Register from './components/register/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { AddTodo } from './components/add-todo/AddTodo';
import AllTodos from './components/all-todos/AllTodos';

function App() {
  return (
    <div>
        <Navbar></Navbar>
     <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element= {<Home />} />
        <Route exact path='/add-todo' element={<AddTodo />} />
        <Route exact path='/all-todo' element={<AllTodos />} />
     </Routes>
    </div>
  );
}

export default App;
