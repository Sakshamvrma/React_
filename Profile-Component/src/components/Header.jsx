export function Header({name,age,place}){
  return (
    <>
      <div className="h-1/2 bg-blue-300 "></div>
      <img className= "absolute w-16 h-15 rounded-full z-10 transform -translate-y-1/2 left-1/2 -translate-x-1/2" src="\public\jobs.jpeg" 
              />
      <div className=" border-b-2 border-gray-300 h-1/2 py-7 ">
                  <div className='flex justify-center '> 
                      <div className="font-bold py-1">{name}</div>
                      <div className='px-2 py-1 text-gray-500 '>{age}</div></div>
                  <div className='text-gray-500 text-center '>{place}</div>
      </div>
 
    </>

  )
}