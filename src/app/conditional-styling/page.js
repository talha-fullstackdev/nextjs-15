"use client";
import React, { useState } from "react";
import condtionalStyles from "../conditional.module.css";
const ConditionalStyling = () => {
  const [color, setColor] = useState("blue");
  // const { green, pink } = condtionalStyles;
  // return (
  return (
    // <div className={color === "blue" ? green : pink}>Conditional Styling</div>
    <>
    <div className={color === "blue" ? condtionalStyles.green : condtionalStyles.pink}>Conditional Styling</div>
    <button onClick={()=>setColor("red")}>chnage color</button>
    </>
  // );
  );
};

export default ConditionalStyling;
