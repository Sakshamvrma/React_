import React from "react";
import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
let counter =4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "at 6 am",
    },
    {
      id: 2,
      title: "go to mall",
      description: "at 11 am",
    },
    { id: 3, title: "go to lib", description: "at 11 am" },
  ]);
  function handler(){
    setTodos([...todos,{
      id:counter++,
      title:"t4",
      description:"d4"
    }])
    

  }
  return (
    <div>
     <button onClick={handler}>Add a todo</button>
    {todos.map(function(todo){
    return <CreateTodo todo={todo} key={todo.id}/>})
    }
    </div>
  );
}

export default App;
