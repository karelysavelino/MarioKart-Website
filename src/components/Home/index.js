import React from "react"
import AboutMe from "./About.js"
import Intro from "./Intro.js"

export default class Index extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <>
         <div 
         style={{ width: '100%', height: '100%'}}>
            <Intro navbar={this.props.navbar}/>
            <AboutMe/>
            </div>
            </>
        )
    }
    
}