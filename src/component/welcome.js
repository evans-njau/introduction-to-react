import React, { Component } from "react";

class Welcome extends Component{
    constructor(){
        super()
        this.state = {
            message: "Welcome man"
        }
    }
    changemessage() {
        this.setState(
            {
                message: "Thanks for choosing us today"
            }
        )
    }
    render(){
        return(
            <>
             <h1>
                {this.state.message}
            </h1>
            <button onClick={()=>this.changemessage()}>Subscribe</button>
            </>
           
        )
    }
}
export default Welcome