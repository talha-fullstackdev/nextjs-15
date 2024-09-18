"use client";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getUserData() {
      const userData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const actualData = await userData.json();
      setData(actualData);
    }
    getUserData();
  }, []);

  return (
    <div>
      welcome user fetch data from api
      {data.map((val) => (
       <table key={val.id}>
        <tr>User-Name : {val.name}</tr>
        <tr>user-ID : {val.id}</tr>
        <tr>user-Email :{val.email}</tr>
       </table>
      ))}
    </div>
  );
};

export default Users;
