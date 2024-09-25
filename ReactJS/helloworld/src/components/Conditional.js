import React from "react"
class Conditional extends React.Component{
  constructor()
  {
    super()
  this.state ={value:true}
  }
  render()
  {
    return(
      this.state.value && <h1>This is from the short circuit method</h1>//short circuit method
    )
    //ternanry operator conditional statement
    // return(
    // this.state.value?<h2>This is from the trenary operator</h2>:<h3>This is the else case of the ternary operator</h3>
    // )
    //element variable method in conditional statements
    // let msg = <h2>This is from the element variable conditional method</h2>
    // if(this.state.value)
    // {
    //   return(msg)
    // }
    /*if -else conditional
    // if(this.state.value)
    // {
    //     return(<>
    //       <h2>This if is from if else conditional statement implementaion</h2>
    //     </>)
    // }
    // else{
    //   return(<>
    //       <h3>This is also from the if else conditional statement implemention else case</h3>
    //   </>)
    // }
*/
  }
}
export default Conditional