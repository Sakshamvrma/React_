import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Rendering the App component
function App() {
  const [count,setcount]=useState(0);
  
 return (
  <div>
  <CustomButton count={count} setcount={setcount}></CustomButton>
 </div> 
 )
}
//Component
function CustomButton(props){
  function onClickhandler(){
    props.setcount(props.count+1);
  }
  return (
    <button onClick={onClickhandler}>Counter {props.count}</button>
  )

}

export default App
