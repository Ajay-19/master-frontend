import React,{Component} from "react"
class CounterEx extends Component{
  constructor(props) {
    super(props)
    this.state = {
       count:0
    }
  }

  inc()
  {
    this.setState(prevState => ({
      count:prevState.count+1
    }))
  }
  dec()
  {
    this.setState(prevState => ({
      count:prevState.count-1
    }))
  }
  render()
  {
    return(<>
    <h1>The count value is - {this.state.count}</h1>
    <button onClick={()=>this.inc()}>Incremnet</button><br></br>
    <button onClick={()=> this.dec()}>Decrement</button>
    </>)
  }
}

export default CounterEx