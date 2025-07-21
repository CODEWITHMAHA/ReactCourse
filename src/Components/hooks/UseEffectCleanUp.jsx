import { useState, useEffect } from 'react';

const UseEffectCleanUp = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prev)=>prev+1);
        },1000)
        return()=>{
                clearInterval(interval)
            }
    },[])

  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen '>
      <h1 className='text-3xl font-bold text-white'>My subscribers on Youtube</h1>
       <p className='text-6xl text-white'>{count}k</p>
       <p className='text-4xl font-bold text-white text-center'>Subscribers <br/> Realtime Counter</p>
    </div>
  )
}

export default UseEffectCleanUp
