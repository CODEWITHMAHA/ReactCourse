import { useState } from "react";

const Challenge2 = () => {
  const [user, setUser] = useState([
    { name: "maha", age: 21 },
    { name: "sara", age: 22 },
    { name: "neha", age: 23 },
    { name: "sana", age: 24 },
  ]);
  const userCount = user.length; //This userCount is Derived State
  const averageAge = user.reduce((acc, curr) => acc + curr.age, 0) / userCount;
  //This averageAge is also Derived State
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1>User List</h1>
      <ul>
        {user.map((item, index) => (
          <li key={index} className="">
            <p>
              {" "}
              Name: {item.name}, Age: {item.age} years Old
            </p>
          </li>
        ))}
      </ul>
      <p>Total Users: {userCount} </p>
      <p>Average age : {averageAge}</p>
    </div>
  );
};

export default Challenge2;
