import React from "react"


export default function Title(props){
  const {text, url} = props
  return(
    // <div className = "link">{props.text}</div>
    <a className = "link" href={url}>{text}</a>
    
  )
}