import React from "react"
class SetstateEx extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       message : "Hi, Welcome to my Channel"
    }
  }
  
  Subscribe()
  {
      this.setState({
        message : "Thank you for the Subscribe"
      })
  }
  
  render()
  {
    return(<>
    <h1>{this.state.message}</h1>
    <button onClick={()=>this.Subscribe()}>Subscribe</button>
    </>)
  }
}

export default SetstateEx