import React from "react"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class NavBar extends React.Component{
    render(){
        return (
            
        <div style={{position:"sticky",backgroundColor:"", display: 'flex',justifyContent:'center', alignItems:'center'}}   class="topnav-centered">
             <Link style={{paddingRight:20, color:"white", textDecorationColor:"#00000000"}} to="/">Home</Link>
             <Link style={{paddingRight:20, color:"white", textDecorationColor:"#00000000"}} to="/project">Project</Link>
             <Link style={{paddingRight:20, color:"white",  textDecorationColor:"#00000000"}} to="/resume">Resume</Link>
             <Link to="/contact" style={{paddingRight:20, color:"white", textDecorationColor:"#00000000"}} >Contact</Link>
        </div>
    
        )
    }
    
}