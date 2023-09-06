import './App.css';
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import AddTodo from "./MyComponent/AddTodo";
import React, { useState, useEffect } from 'react';
import About from "./MyComponent/About";
import { Switch } from "react-router-dom"; 
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";


function App() {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    const sno = todos.length + 1;
    const newTodo = {
      sno,
      title,
      desc
    };
    setTodos([...todos, newTodo]);
  };

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    const updatedTodos = todos.filter((e) => e !== todo);
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <div>
        <Header title="Mytodos_list" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          )} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
   </Router>
  );
}

export default App;
