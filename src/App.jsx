import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Credentials} from './components/Credentials'

function App() {
  const [title, setTitle] = useState("Heisenberg")
  const [description,setDescription]=useState("Let him Cook!")

  return (
    <>
    <Credentials title={title} description={description} />

    </>
  )
}

export default App
