import React from "react";

const PropDrilling = () => {
  return (
    <section className="p-4 h-lvh text-3xl tracking-wider flex flex-col justify-center items-center">
      <h1>Component A</h1>
      <ChildComponent data="React js" />
    </section>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <h1>Hello, i am component B</h1>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <h1>Hello, i am component C</h1>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};

const GrandGrandChildComponent = (props) => {
  return (
    <>
      <h1>Hello, i love {props.data}</h1>
    </>
  );
};

export default PropDrilling;
