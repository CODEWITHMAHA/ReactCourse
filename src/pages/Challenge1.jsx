
const Challenge1 = () => {
  return (
    <>
      <h1>Progile card challenge</h1>
      <ProfileCard
       name='Mahrukh khan'
       age={21}
       greeting={
        <div>
            <strong>Hi Mahrukh khan, have a wonderful day</strong>
        </div>
       }
      >
        <p>Hobbies:Reading , gaming</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  )
}

export default Challenge1

function ProfileCard(props){
    const {name , age,greeting , children} = props
    return(
        <>
          <h2>Name:{name}</h2>
          <p>Age:{age}</p>
          <p>{greeting}</p>
          <div>{children}</div>
        </>
    )
}