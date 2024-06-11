import { useState } from 'react'


function App() {
  
  return (
    <>
    <CardWrapper >
      hii there
      {<TextComponent/>}
      {<BlueComponent/>}
    </CardWrapper>


      
    </>
  )
}
function TextComponent(){
  return <div style={{backgroundColor:'pink'}}>
    <h1>This is some random text</h1>
  </div>
}
function BlueComponent(){
  return <div style={{color:'white',backgroundColor:'purple'}}><h1>The text is in blue and wrapped inside wrapper component</h1></div>
}
function CardWrapper({children}){
  const style={
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f8f9fa',
    padding: '10px',
    margin:'25px',
    width:'250px'
  }
  console.log(children)
  return <div style={style}>{children}</div>

}

export default App
