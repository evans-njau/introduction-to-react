import React, { Component } from "react";

class AllofEm extends Component{
    render(){
        const {name, job} = this.props
        return(
            <h2>His name is {name} and he is a {job}</h2>
        )
    }
    
}


export default AllofEm