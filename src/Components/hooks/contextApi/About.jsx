import { useContext } from "react"
import { BioContext } from "."

const About = () => {
   const {myName , myAge} = useContext(BioContext)
  return (
    <div>
      <h1>Hello Context Api (About) . My Name is {myName}</h1>
      <h1 className="text-center">I am {myAge} years old.</h1>
    </div>
  )
}

export default  About 
