"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Employee = () => {
  const router = useRouter();
  const handleRouter = (routerName) => {
    router.push(routerName);
  };
  return (
    <>
      <div> contact employees</div>
      <button onClick={() => handleRouter("/contact/employee/talha")}>
        contact Talha
      </button> <br />
      <button onClick={() => handleRouter("/contact/employee/hamza")}>
        contact hamza
      </button>
    </>
  );
};

export default Employee;
