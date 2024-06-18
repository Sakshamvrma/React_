import React from 'react';
import { useRecoilValue, useRecoilState, RecoilRoot } from 'recoil';
import { countAtom } from './store/atoms/count';

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
  
  return <div>
    {count}
  </div>
}

function Button(){
  const [count,setCount] = useRecoilState(countAtom);

  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>
    
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
  
}

export default Recoil;