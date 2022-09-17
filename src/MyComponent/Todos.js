import React from 'react';
import TodosItem from './TodosItem';

export default function Todos(props) {
  return (
    <div className="container" >
        <h4 className="center">TodosList</h4>
        {props.todos.length === 0 ? "NO todos" : 
        props.todos.map((todo)=>{
          return  <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
        
    </div>
  )
}
