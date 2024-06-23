import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    Increement(){
       this.setState(
        {
            count: this.state.count + 1
            
        }  
        , ()=>{
            console.log("formatted value: ", this.state.count )
        }
       )
       console.log(this.state.count)
    }
    
  render() {
    return (
      <>
      <div>
        count = {this.state.count}
      </div>
     <button onClick={()=>this.Increement()}>Increement</button>
      </>
    )
  }
}

export default Counter
