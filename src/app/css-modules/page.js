import React from "react";
import moduleCss from "../page.module.css";
import customcss from "../custom.module.css"
const CssModules = () => {
  return (
    <>
      <div className={moduleCss.main}>css modules in next.js,style page.module.css</div>
      <h1 className={customcss.main}>style from  custo.module.css</h1>
    </>
  );
};

export default CssModules;
