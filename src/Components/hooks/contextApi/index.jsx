import { createContext } from "react";
// 1 step
export const BioContext = createContext()
// 2 step
export const BioProvider = ({children})=>{
    const myName = "Mahrukh khan";
    const myAge = 21;
    return <BioContext.Provider value={{myName , myAge}}>
      {children}
    </BioContext.Provider>
}