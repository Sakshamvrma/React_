import React, { useState, useEffect } from "react";
import axios from 'axios';

function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState([true])
 
  useEffect(() => {
   setTimeout(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data),
      setLoading(false)}
      )
      .catch(error=>{
        setLoading(true)});
   },2000) 
  }, []);

  return {posts,loading};
}

export default function Customhook() {
  const {posts,loading} = usePosts();
  if(loading){
    return <div>loading...</div>
  }
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} >{post.title}</li> 
        ))}
      </ul>
    </div>
  );
}