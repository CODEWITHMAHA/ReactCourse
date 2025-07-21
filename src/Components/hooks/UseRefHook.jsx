import { useRef } from "react";

// Uncontrolled
const UseRefHook = () => {
    // get reference
    // const username = document.getElementById("username");
    // const password = document.getElementById("password");


     const username = useRef(null);
     const password = useRef(null);
    

    const handleFormSubmit =(e)=>{
        e.preventDefault();
        console.log(username.current.value,password.current.value);
        

    }
  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen w-[1200px] ">
      <h1 className="text-white font-bold text-2xl">Hello from useRef</h1>
      <form 
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-3 items-center justify-center">
           
        <input
          ref={username}
          type="text"
          id="username"
          placeholder="Enter username"
          className="border border-white rounded p-2 text-white"
        />
        <input
          ref={password}
          type="password"
          id="password"
          placeholder="Enter Password"
          className="border border-white rounded p-2 text-white"
        />
        <button
          type="submit"
          className=" bg-amber-100 font-bold px-2 py-1 rounded-2xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefHook;
