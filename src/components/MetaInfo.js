import React from "react";

//Format unix time stamp to human readable format
export function formatTime(time) {
  const dateObject = new Date(time * 1000);
  return dateObject.toLocaleString();
}


export default function MetaInfo(props) {
  const {by, time, comments} = props;
  var formatedTime = formatTime(time)
  return (
    <p className="meta-info-light">
      by {by} on {formatedTime} with {comments} comments
    </p>
  );
}
