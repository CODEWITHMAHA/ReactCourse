import { useEffect, useState } from "react";
const UseEffectChallenge2 = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handleResize =()=>{
            setWidth(window.innerWidth);
            return()=>{
                window.removeEventListener("resize", handleResize);
            }
        }
    },[width])
  return (
    <div>
      <h1 className="text-white text-2xl">window width :{width}px</h1>
    </div>
  )
}

export default UseEffectChallenge2
