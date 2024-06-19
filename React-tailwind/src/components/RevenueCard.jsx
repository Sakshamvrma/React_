export function RevenueCard({title,showWarning,orderCount,amount}){
  return (
    <div className="  bg-white rounded shadow-md m-3">
      <div className=" flex justify-left text-gray-500 px-5">
          <div >{title}</div>
          <div className=" px-2 py-1"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg></div>
      </div>
      <div className="flex justify-between">
        <div className="text-3xl p-4">
          <b>₹{amount}</b>
          
        </div>
        <div className=" text-blue-500 p-2 py-4 m-2">

          {orderCount ? <div className="flex">
            <div className="underline underline-offset-4">{orderCount} order(s)</div>
            <div >{<svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
            }</div>
           </div>:null
          }
        </div>
      </div>
    
    
  </div>
    
  )
}
