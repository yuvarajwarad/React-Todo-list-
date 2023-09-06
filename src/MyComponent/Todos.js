import React from 'react';
import Todoitem from '../MyComponent/Todoitem';

const Todos = (props) => {
  return (
    <div className="container my-3">
   
      <h3 className="my-3" >Todos list</h3>
        {props.todos.length===0? "No todos to display":
        props.todos.map((todo) => {
         return <Todoitem todo={todo} key={todo.sno } onDelete={props.onDelete} />
        })}
    </div>
  )
}

export default Todos;
 