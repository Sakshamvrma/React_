
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { BlueCard } from './components/BlueCard'
import { SideBar } from './components/SideBar'
function App() {
  

  return (
    <>
    {/* <SideBar/> */}
    <div className='grid p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      <BlueCard title={"Next Payout"} orderCount={23} amount={"2,312.23"} date={"Today,4:00PM"}/>
    <RevenueCard title={"Amount Pending"} orderCount={13} amount={"92,312.20"}/>
    <RevenueCard title={"Amount Processed"} orderCount={0} amount={"23,92,312.19"}/>
     
    </div>
    </>
    
   
  )
}


export default App
