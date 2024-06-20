
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  

  return (
    <div className='  flex justify-center m-40 '>
      <div className='  grid grid-rows-2  w-80 h-96 border-current '  >
        <div className='border-b-gray-500' ><Header name="Steve Jobs" age="30" place="California"/>
       </div>
        <div className='py-4 flex justify-around h-1/3' >
          <Footer  title="Followers" number="80K"/>
          <Footer title="Likes" number="803K"/>
          <Footer title="Photos" number="1.4K"/>
        </div>
      
    </div>
    
    </div>
    
  )
}

export default App
