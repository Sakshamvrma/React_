import { useEffect ,useState} from "react";
function Useeffecthook(){
  const [render,setRender]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //setRender(render=>!render);
      setRender(false);
    },2000)
  })
return (
<>
{render?<MyComponent/>:<div><h2>This is div2 after div1 got unmounted</h2></div>}
</>
)}
function MyComponent(){
  useEffect(()=>{
    console.log("Component Mounted!!");
    return (
      ()=>{
        console.log("Component Unmounted!!!")
      }
    )
  },[])
  return (
    <>
      <h1>This is Div 1 </h1>
    </>
  )
}
export  default Useeffecthook;