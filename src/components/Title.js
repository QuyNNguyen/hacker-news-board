import React from "react"


export default function Title(props){
  const {text, url} = props
  console.log(url)
  return(
    // <div className = "link">{props.text}</div>
    <a className = "link" href={url}>{text}</a>
    
  )
}