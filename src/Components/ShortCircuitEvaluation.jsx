import { useState } from "react";
const ShortCircuitEvaluation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="py-4">Welcom To Short Circuit Evaluation</h1>

     {isLoggedIn && <p className="mb-4 p-4">Your are logged in!</p>}
     {user ? `Hello ${user}`: <p className="mb-4 p-4" >Please log in to see your details.</p>}

      <div className="grid grid-cols-3 gap-4 ">
        <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="bg-blue-500 p-4 text-white font-bold text-xl cursor-pointer">
          Toggle Login state
        </button>
        <button
         onClick={()=>setUser('Mahrukh khan')}
        className="bg-blue-500 p-4 text-white font-bold text-xl cursor-pointer">
          set user
        </button>
        <button
        onClick={()=>setUser('')}
        className="bg-blue-500 p-4 text-white font-bold text-xl cursor-pointer">
          Clear user
        </button>
      </div>
    </section>
  );
};

export default ShortCircuitEvaluation;
