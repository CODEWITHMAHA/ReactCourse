import { useState } from "react";

const ControlledVsUnControlled = () => {
  const [name, setName] = useState("");
  const handleControlledChange = (e) => {
    setName(e.target.value);
  };
  // controlled component example
  const handleControlledSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };
  // Uncontrolled component example
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    const inputName = document.getElementById("inputName").value;
    alert(`Submitted Name: ${inputName}`);
  };

  return (
    <>
      {/* unControlled */}
      <section className="flex flex-col items-center justify-center gap-4 my-18">
        <h1>UnControlled Component</h1>
        <form onSubmit={handleUncontrolledSubmit}>
          <label className="font-bold">
            Name:
            <input
              className="border-1 border-black p-2 ml-2"
              type="text"
              id="inputName"
              name="name"
            />
          </label>
          <br />
          <button
            className="bg-amber-600 text-2xl p-4 mt-4 font-bold cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
      {/* controlled */}
      <section className="flex flex-col items-center justify-center gap-4 ">
        <h1>Controlled Component</h1>
        <form onSubmit={handleControlledSubmit}>
          <label className="font-bold">
            Name:
            <input
              value={name}
              onChange={handleControlledChange}
              className="border-1 border-black p-2 ml-2"
              type="text"
              id="inputName"
              name="name"
            />
          </label>
          <br />
          <button
            className="bg-amber-600 text-2xl p-4 mt-4 font-bold cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default ControlledVsUnControlled;
