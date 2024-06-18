import React from 'react';
import { useRecoilValue, useRecoilState, RecoilRoot, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';
import { evenSelector } from './store/atoms/count';

const Recoil = () => {
  return (
    
      <RecoilRoot>
      <Count  />
      </RecoilRoot>
   
  )
};
function Count(){
  return <div>
     <CounterRender />
    <Button  />
  </div>
}

function CounterRender(){
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector); // Correctly use the selector with useRecoilValue
  
  return <div>
    {count}
    {/* {count%2===0 && (<div>It is Even</div>)} */}
    {isEven && (<div>It is Even</div>)}
      </div>
  
}

function Button(){
  // const [count,setCount] = useRecoilState(countAtom);
  const setCount=useSetRecoilState(countAtom);//we can avoid using cont var
  //button component will not unnecesaary re render

  return <div>
    <button onClick={() => {
      setCount(count=>count + 1)//use this instead of count+1
    }}>Increase</button>
    
    <button onClick={() => {
      setCount(count=>count - 1)
    }}>Decrease</button>
  </div>
  
}

export default Recoil;