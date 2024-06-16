import React,{Suspense} from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
const About = React.lazy(()=>import('./components/About'));
const Home = React.lazy(()=>import('./components/Home'));
const Navbar = React.lazy(()=>import('./components/Navbar'));
function App() {
  return (
    <BrowserRouter>
      <div>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Suspense fallback={"Loading..."}><Home/></Suspense>}/>
          <Route path="/About" element={<Suspense fallback="Loading..."><About /></Suspense>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
