import React from "react";
async function getApiData(params) {
    const apiData = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await apiData.json()
    return data
}
const Post = async () => {
    let posts = await getApiData()
    console.log(posts);
    
  return <div>
 {posts.map((post)=>(
    <h1 key={post.id}>post title : {post.name}</h1>
 ))}
  </div>;
};

export default Post;
