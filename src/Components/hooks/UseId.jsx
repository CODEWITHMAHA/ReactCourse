import { useId } from "react"
const UseId = () => {
    // first method
//     const [username,email] = useId();
//   return (
//     <form>
//         <div>
//             <label htmlFor={username}>Username: </label>
//             <input className="border border-white" type="text" id={username} name="name" />
//         </div>
//         <div>
//             <label htmlFor={email}>Email: </label>
//             <input className="border border-white" type="email" id={email} name="email" />
//         </div>
//         <button className="bg-amber-50 text-black mt-4 py-1 px-2" type="submit">Submit</button>
//     </form>
//   )
// second method
   const id = useId();
  return (
    <form>
        <div>
            <label htmlFor={id + "usernameId"}>Username: </label>
            <input className="border border-white" type="text" id={id + "usernameId"} name="name" />
        </div>
        <div>
            <label htmlFor={id + "emailId"}>Email: </label>
            <input className="border border-white" type="email" id={id + "emailId"} name="email" />
        </div>
        <button className="bg-amber-50 text-black mt-4 py-1 px-2" type="submit">Submit</button>
    </form>
  )
}

export default UseId
