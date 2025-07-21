import { forwardRef, useId } from "react"
import { useRef } from "react"

const ForwardRef = () => {
    const username = useRef(null)
    const password = useRef(null)

    const handleFormSubmit =(e)=>{
     e.preventDefault();
     console.log(username.current.value,password.current.value);
     
    }

  return (
    <form onSubmit={handleFormSubmit}>
        {/* parent */}
        <BeforeReact19Input label="username: " ref={username}/>
        <BeforeReact19Input label="password: " ref={password}/>
        <button className="bg-white items-center px-2 py-1">Submit</button>
    </form>
  )
}
// before v19
// geting ref from parent to child without using props and without component re-render 
// const BeforeReact19Input =forwardRef((props,ref)=>{
//    const id= useId();
//    return(
//     <div className="flex flex-col  items-center  justify-center  text-white text-2xl font-semibold">
//         <label className="mb-2" htmlFor={id}>{props.label}</label>
//         <input className="border border-white mb-4" type="text" ref={ref} />
//     </div>
//    )
// })

// After react19
const BeforeReact19Input =({label,ref})=>{
   const id= useId();
   return(
    <div className="flex flex-col  items-center  justify-center  text-white text-2xl font-semibold">
        <label className="mb-2" htmlFor={id}>{label}</label>
        <input className="border border-white mb-4" type="text" ref={ref} />
    </div>
   )
}

export default ForwardRef


