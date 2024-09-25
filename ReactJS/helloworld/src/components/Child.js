import React from "react"
const Child = (props) =>
{
  return(
    <>
    <h2>This is child component</h2>
    <button onClick={()=>props.handler("child")}>Display</button>
    </>
  )
}

export default Child