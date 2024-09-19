import React from 'react'
const About = () => {
  return (
    <div className='text-red-500'>welcome to about page</div>
  )
}

export default About
export function generateMetadata(){
  return{
    title:"About page",
    description:"Hello this is about page"
  }
}