import React from "react"
import Title from "./Title.js"



export default function Post(props){
  const posts = props.posts
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Title text={post.title} />
        </li>
      ))}
    </ul>
  );
}