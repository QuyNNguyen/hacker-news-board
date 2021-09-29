import React from "react";
import Title from "./Title.js";
import MetaInfo from "./MetaInfo";

export default function Post({ posts }) {

  console.log(posts);
  return (
    // <div>{test}</div>
    <ul className="ul">
      {posts.map((post) => (
        <li key={post.id} className="post">
          <Title text={post.title} url={post.url} />
          <MetaInfo by={post.by} time={post.time} comments={post.descendants} />
        </li>
      ))}
    </ul>
  );
}
