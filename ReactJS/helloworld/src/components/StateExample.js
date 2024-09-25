import React, {Component} from "react"
class StateExample extends Component{
  constructor()
  {
    super()
    this.state = {
      msg : "Hi from state in class component"
    }
  }
  render()
  {
    return(<>
        <h1>State Example,{this.state.msg}</h1>
    </>)
  }
}

export default StateExample