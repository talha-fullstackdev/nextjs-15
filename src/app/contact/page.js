"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Contact = () => {
  const router = useRouter()
  return (
    <div className='text-center mt-8'>
        <h1 className='text-red-600'>welcome to contact page</h1>
        <p className='text-red-600'>03239825457 , nawazt964@gmail.com</p>
        <Link href="/contact/employee">contact employee</Link> <br />
        <button onClick={()=>router.push("/contact/company")}>contact company</button>
    </div>
  )
}

export default Contact