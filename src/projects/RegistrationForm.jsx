import { useState } from "react";

const RegistrationForm = () => {
  const [user,setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const fields = [
    {
      label: "First name",
      name: "firstName",
      type: "text",
      placeholder: "Enter first name",
    },
    {
      label: "Last name",
      name: "lastName",
      type: "text",
      placeholder: "Enter last name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter email address",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      type: "number",
      placeholder: "000-000-0000",
    },
  ];
  const handleInputChange = (e) => {
    const input = e.target
    const value = input.value
    const key = input.name
   setUser({
      ...user, 
      [key] : value
    })
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", user);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-gray-300 p-8 rounded-lg shadow-md max-w-md mx-auto mt-10"
    >
      <div className="flex flex-col gap-4 items-center p-8">
        <h1 className="text-4xl text-blue-600 font-black">Sign Up</h1>
        <p className="text-gray-400 font-semibold">
          Please fill this form to create an account
        </p>
        {fields.map((field, index) => (
          <label key={index} className="font-semibold text-gray-700 w-full">
            {field.label}
            <input
              className="outline-none border rounded-full p-2 w-full"
              type={field.type}
              placeholder={field.placeholder}
              required
              name={field.name}
              onChange={handleInputChange}
            />
          </label>
        ))}
        <p>
          By creating an account you agree to our{" "}
          <span className="text-blue-600 font-bold cursor-pointer">
            Terms & Privacy
          </span>
        </p>
        <button
          className="bg-blue-600 py-2 px-4 rounded mt-2 text-white font-bold cursor-pointer w-full"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
