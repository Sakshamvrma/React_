import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, settodos] = useState([]);
  function addToDo() {
    settodos([
      ...todos,
      {
        todoTitle: "Title to your todo",
        todoDescription: "Description to your todo",
      },
    ]);}
    return (
      <div>
        <button onClick={addToDo}>Add a Todo</button>
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
          <Dummybutton></Dummybutton>
          {/* /*it does not take any props as input yet it re renders because the parent component re renders */ }
        </div>
      );
    }
    function Dummybutton(){
      console.log("re-rendered Dummy Button")
      return <button>Remove ToDo</button>
    }
  

export default App;
