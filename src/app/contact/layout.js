"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const layout = ({children}) => {
    const pathName = usePathname()
    console.log(pathName);
    
  return (
    <>
    {/* render layout in children according to condition which we get from current pathname */}
    {pathName !=="/contact/company"?<h1>comman layout for contact page</h1>:null}
    {children}
    </>
    
  )
}

export default layout