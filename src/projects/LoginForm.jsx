import { useState } from "react";

const LoginForm = () => {
  const [user,setUser] = useState({
    username:'',
    password:''
  })
  const handleChange = (e)=>{
   const input = e.target
   const value = input.value
   const key = input.name
   setUser({
    ...user,
    [key] : value
   })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
   console.log(user)
  }
  
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-10 bg-gray-300 rounded-lg shadow-md max-w-md mx-auto mt-10 ">
      <h1 className="text-3xl font-black text-blue-600">Login Form</h1>
      <form
       onSubmit={handleSubmit}
       className="flex flex-col justify-center items-center gap-5 w-full mt-2">
        <label htmlFor="username" className="font-bold ">
          Username:
          <input
            name="username"
            type="text"
            placeholder="Enter username"
            value={user.username}
            className="border outline-none rounded-3xl p-2 w-full"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className="font-bold ">
          Password:
          <input
            name="password"
            type="password"
            placeholder="*********"
             value={user.password}
            className="border outline-none rounded-3xl p-2  w-full"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="bg-blue-600 text-white font-bold rounded-full p-2 w-full hover:bg-blue-700 transition duration-300 cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
