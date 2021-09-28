import React from "react";
import Title from "./Title.js";

export default function Post({ posts }) {

  return (
    // <div>{test}</div>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Title text={post.title} />
        </li>
      ))}
    </ul>
  );
}
