
import React, { useState } from "react";
const EventFunctionState = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    count > 0 ? setCount(count - 1) : 0; 
  };
  return (
    <>
      <h1 className="mt-10 text-red-600">Events Functions States</h1>
      <button
        onClick={() => alert(`current count value is ${count}`)}
        className="mt-10 border p-2 px-6 rounded-lg hover:bg-lime-400  hover:text-black"
      >
        alert
      </button>
      <h1 className="mt-8">Counter</h1>
      <h2 className="mt-6">{count}</h2>
      <button
        onClick={handleInc}
        className="mt-10 mr-2 border p-2 px-6 rounded-lg hover:bg-lime-400  hover:text-black"
      >
        Increment
      </button>
      <button
        onClick={handleDec}
        className="mt-10 ml-2 border p-2 px-6 rounded-lg hover:bg-red-700  hover:text-white"
      >
        Decrement
      </button>
    </>
  );
};

export default EventFunctionState;
