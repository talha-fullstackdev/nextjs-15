import React from 'react'
import { redirect } from 'next/navigation'
const Redirect = () => {
    redirect("/home")
  return (
    <div>Redirect</div>
  )
}

export default Redirect