import React from "react";


export default function MetaInfo(props) {
  const {by, time, comments} = props;
  return (
      <p className="meta-info-light">
        by {by} on {time} with {comments} comments
      </p>
  );
}
