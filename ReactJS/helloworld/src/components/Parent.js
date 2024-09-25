//props as method .controlling the parent from child component
import React from "react"
import Child from "./Child"
class Parent extends React.Component{
  constructor(){
    super()
    this.state ={
        component:"parent component"
    }
  }

  displayMsg = (props) =>  {
      alert(`This is ${this.state.component} controlling from ${props} `)
  }

  render()
  {
    return(
      <>
      <h1>This is parent component</h1>
      <Child handler={this.displayMsg}/>
      </>
    )
  }
}

export default Parent