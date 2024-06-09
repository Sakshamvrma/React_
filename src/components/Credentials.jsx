export function Credentials(props){
  return <div style={{border:'1px solid purple',
    padding:20,
    width:400,
    backgroundColor:'#FCDC94'//#F0EBE3
    
  }
  }>

  <h1>{props.title}</h1>
  <h2><em>{props.description}</em></h2>
  <button style={{
    padding:10,
    margin:10,

  }}><a href="https://www.instagram.com/saksham_vrma_?igsh=aTZoNXdybXRpZ2lm" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Instagram</a></button>
  <button style={{
    padding:10,
    margin:10,

  }}><a href="https://x.com/saksham_verma9?t=229babyaUVzQhf07EYRNPw&s=08" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'
   }}>Twitter</a></button>



  </div>

}