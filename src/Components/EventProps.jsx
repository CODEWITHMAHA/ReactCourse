import "./EV.css"
const EventProps = () => {

  const HandleWelcomeUser = (user) => {
    alert(`Hey ${user}`);
  };

  const handleHover = () => {
    alert("Hey,Thanks for hovering me");
  };

  return (
    <>
      <WelcomeUser
        // passing events as a props
        onButtonClick={() => HandleWelcomeUser("Mahrukh")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

export default EventProps;


const WelcomeUser = (Props)=>{
    const {onButtonClick,onMouseEnter} = Props
    const handleGreetings=()=>{
        console.log("Hey user, Welcome")
        onButtonClick()
    }
    return(
        <>
         <button onClick={onButtonClick}>Click Me</button>
         <button onMouseEnter={onMouseEnter}>Hover Me</button>
         <button onClick={handleGreetings}>Greeting</button>
        </>
    )

}