"use client";
import React, { useState } from "react";
const Home = () => {
  const [style, setStyle] = useState({ color: "red" });
  const handleToggle = () => {
    setStyle((prev) => ({
      color: prev.color === "red" ? "blue" : "red",
    }));
  };
  return (
    <>
      <div className="text-red-600">welcome to Home page</div>
      <div style={style}>my color has been chnaged to {style.color}</div>
      <button onClick={handleToggle}>change color</button>
    </>
  );
};

export default Home;
