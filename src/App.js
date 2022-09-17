import './App.css';
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from './MyComponent/Todos';
import React, { useState, useEffect } from 'react';
import { AddTodos } from './MyComponent/AddTodos';
import { About } from './MyComponent/About';
import {BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am onDelete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos");
  }
  const addTodos = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      Desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path='/' element={<AddTodos addTodos={addTodos} />} />
      </Routes>
      <Routes>
      <Route path='/' element={<Todos todos={todos} onDelete={onDelete} />}/>
      <Route path='/About' element={<About/>}/>
      </Routes>  
      <Footer/>
  </BrowserRouter>
  );
}

export default App;
