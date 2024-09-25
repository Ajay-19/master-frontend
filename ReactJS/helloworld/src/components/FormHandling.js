import React from "react"
class FormHandling extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {username:"",comment:"",topic:"Reactjs"}
  }

  inputChangeHandler = (e) =>
  {
    this.setState({
      username:e.target.value
    })
  }

  commentChangeHandler = (e) =>
  {
    this.setState({
      comment:e.target.value
    })
  }

  selectChangeHandler = (e) =>
  {
    this.setState({
      topic:e.target.value
    })
  }

  displayDetails = (e) =>
  {
    alert(`I am ${this.state.username} my comments are ${this.state.comment} and I know ${this.state.topic}`)
    e.preventDefault()
  }
  render()
  {
    return(<>
    <form>
      <div>
        <label>Username :</label>
        <input type="text" value={this.state.username} onChange={this.inputChangeHandler}/>
      </div>
      <div>
        <label> Comment </label>
        <textarea value={this.state.comment} onChange={this.commentChangeHandler}></textarea>
      </div>
      <div>
        <select value={this.state.topic} onChange={this.selectChangeHandler}>
          <option value="Reactjs">Reactjs</option>
          <option value="Javascript">Javascript</option>
          <option value="css">css</option>
          <option value="Html">Html</option>
        </select>
        <button type="submit" onClick={this.displayDetails}>Submit</button>
      </div>
    </form>
    </>)
  }
}

export default FormHandling