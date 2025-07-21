import { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: ""
  });
  const handleInputChange = (e) => {
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setUser({
      ...user,
      [key]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  };
  return (
    <div className="flex flex-col mt-20 items-center justify-center gap-4 w-full p-10 m-10 bg-amber-100 rounded-2xl">
      <h1 className="text-3xl font-black text-orange-600">Contact Form</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-2 mt-4">
        <label htmlFor="username" className="mr-2 font-semibold text-xl">
          Username:
        </label>
        <input
          value={user.username}
          type="text"
          name="username"
          autoComplete="off"
          placeholder="Enter username"
          className="border outline-none rounded-3xl p-2 w-full"
          onChange={handleInputChange}
        />
        <label htmlFor="email" className="mr-2 font-semibold text-xl">
          Email:
        </label>
        <input
          value={user.email}
          name="email"
          type="email"
          autoComplete="off"
          placeholder="example@gmail.com"
          className="border outline-none rounded-3xl p-2 w-full"
          onChange={handleInputChange}
        />
        <label htmlFor="message" className="mr-2 font-semibold text-xl">
          Message:
        </label>
        <textarea
          value={user.message}
          name="message"
          rows={4}
          cols={6}
          className="border rounded p-2"
          onChange={handleInputChange}
        >
          Write your querry here
        </textarea>
        <button
          type="submit"
          className="bg-amber-600 py-2 mt-4 text-white font-semibold"
        >
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
