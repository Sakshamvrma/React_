import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, settodos] = useState([
    {
      todoTitle: "Learn React",
      todoDescription: "Learn React by building a simple todo app",
    },
    {
      todoTitle: "Practice DSA",
      todoDescription: "Binary Search Medium Problems",
    },
  ]);

  function onclickHandler() {
    settodos([
      ...todos,
      {
        todoTitle: "Title to your todo",
        todoDescription: "Description to your todo",
      },
    ]);}
    return (
      <div>
        <button onClick={onclickHandler}>Add a Todo</button>
        {todos.map(function (todo) {
          return (
            <ToDos
              todoTitle={todo.todoTitle}
              todoDescription={todo.todoDescription}
            ></ToDos>
          );
        })}
      </div>
    )
  }
    function ToDos(props) {
      return (
        <div>
          <h1>{props.todoTitle}</h1>
          <p>{props.todoDescription}</p>
        </div>
      );
    }
  

export default App;
