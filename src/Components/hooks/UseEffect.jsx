import { useEffect , useState} from "react"

 //useEffect is a hook that runs after the component renders.Its used to perform side effects in function components.
// useEffect srf first time chlta hai , or dependency array me jo bhi value hai usme change hote hi chlta hai
// console.log("count Value", count);

const UseEffect = () => {
    const [count , setCount] = useState(0)
    const [date,setDate] = useState(0)
    const [value,setValue] = useState("")
    
    useEffect(()=>{
      document.title = `Count ${count}`
    },[count])

    useEffect(()=>{   
        setInterval(()=>{
            const updatedData = new Date()
            setDate(updatedData.toLocaleTimeString())
        },1000)   
        
    },[count])
    


  return (
    
    <div className="w-full flex flex-col items-center justify-center min-h-screen gap-4">
        
          <h1 className="text-3xl font-bold mt-4 text-white">Hello useEffect</h1>
            <h2 className="text-white">Time:{date}</h2>
           <p className="text-2xl font-bold text-white">Count {count}</p>
           <button className="bg-green-400 cursor-pointer text-xl font-semibold p-2 text-white rounded" onClick={()=>setCount(count+1)}>Increment</button>
           <p className="text-xl text-white">Name:{value}</p>
           <input type="text" className="p-4 bg-white rounded outline-none w-full" onChange={(e)=>setValue(e.target.value)} />
       
    </div>
  )
}

export default UseEffect
