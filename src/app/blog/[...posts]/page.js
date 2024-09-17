"use client"
import React from 'react'

const Posts = ({params}) => {
  return (
    <>
    <div>Posts page is here</div>
    <h1>name: {params.posts[0]}</h1>
    <h1>id: {params.posts[1]}</h1>
    </>
  )
}

export default Posts