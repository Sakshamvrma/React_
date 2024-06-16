import { useState ,useContext} from 'react'
import { CountContext } from './context'


function App() {
  const [count, setCount] = useState(0)

  //wrap that componrnt that needs to use the teleported valaue inside the provider

  return (
    <CountContext.Provider value={{count,setCount}}>
    <div>
      <Count />
    </div>
    </CountContext.Provider >
  )
}
function Count(){
  
  return (
    <div>
    <CountRenderer />
    <Buttons />
  </div>
 
  )
}
function CountRenderer(){
  const {count} =useContext(CountContext);
  
  return (
    <div>
      {count}
    </div>
  )
}
function Buttons(){
  const {setCount,count} = useContext(CountContext)
  return (
    <div>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
  </div>
  )
}


export default App
