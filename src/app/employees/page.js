import React from 'react'
import Link from 'next/link'
const EmployeesPage = () => {
  return (
    // dynamic routinf
    <>
    <h1>Employees Page</h1>
    <ul>
      <li><Link href={"/employees/talha"}>Talha</Link></li>
      <li><Link href={"/employees/hamza"}>Hamza</Link></li>
      <li><Link href={"/employees/hussain"}>Hussain</Link></li>
    </ul>
    </>
  )
}

export default EmployeesPage