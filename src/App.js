import React, {useState,useEffect} from 'react'
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Todos from './component/Todos'
import TodoForm from "./component/TodoForm"

export default function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    if (localTodos)
    {
      setTodos(JSON.parse(localTodos))
    }
  }, [])

  const addTodos = (todo) => {
    setTodos([...todos, todo])
  }

   useEffect(() => {                         
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const markComplete = id => {
    setTodos(
      todos.filter(todo =>
      todo.id !== id 
    ))
  }

 
  return (
    <Container>
      <div id="img-div">
            <img src = "https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/logo_lco_t17sd.png" alt="lco-app-logo" width="50" height="50" />
        </div>
      <h1>Todo App with Local Storage</h1>
       <TodoForm addTodos={addTodos}/>
      <Todos todos={todos} markComplete={markComplete} />
   </Container>
  )
}
