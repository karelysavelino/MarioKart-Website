import React from "react"
import {Resume } from "./Content.js"
import Cover from "./Cover.js"

export default class Index extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <>
            <Cover navbar={this.props.navbar}/>
            <Resume/>
            </>
        )
    }
    
}