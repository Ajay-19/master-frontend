import React from "react"
class PropExample2 extends React.Component{
  constructor()
  {
    super()
    this.state ={}
  }
  render()
  {
    const{name} = this.props
    return(
      <div>
        <h1>Hi from {name}</h1>
      </div>
    )
  }
}

export default PropExample2