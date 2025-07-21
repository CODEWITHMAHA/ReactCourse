import { useEffect, useState } from "react";

const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/ditto";

  // const fetchPokemon = () => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApiData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       console.log(error);
  //       setLoading(false);
  //     });
  // };

   const fetchPokemon = async()=>{
    try{
      const response = await fetch(API);
      const data =  await response.json();
      setApiData(data);
      setLoading(false);
    }catch(error){
      setError(error);
      console.log(error);
      setLoading(false);
    }
   }

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(apiData);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl text-white font-black flex justify-center items-center h-screen">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-2xl text-red-500 font-black flex justify-center items-center h-screen">Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen text-white">
      <header className="font-bold text-4xl mb-5">
        <h1>Let's Catch Pokemon</h1>
      </header>
      <ul>
        <li className="flex flex-col items-center justify-center bg-amber-50 py-10 px-5 text-2xl font-bold rounded-2xl shadow-lg text-black">
          <figure>
            <img
              src={apiData.sprites.other.dream_world.front_default}
              alt={apiData.name}
            />
          </figure>
          <h1 className="mt-4">{apiData.name}</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <p>
              Height: <span>{apiData.height}</span> 
            </p>
             <p>
              Weight: <span>{apiData.weight}</span> 
            </p>
             <p>
                Speed: <span>{apiData.stats[0].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default HowNotToFetchApi;
