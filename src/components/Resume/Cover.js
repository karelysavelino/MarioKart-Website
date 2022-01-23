import React from "react"
import "./resume.css"




export default class Cover extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="foo" style={{backgroundColor:"white",
      alignItems: 'left',
      justifyContent: 'left',
      color:"white", 
      padding:0}} >
     {this.props.navbar}
      <div style={{ paddingTop:"15%",paddingLeft:"4%"}}>
     <p style={{textAlign:"left",paddingBottom:0, fontSize:44, fontWeight:400, fontFamily:"Arvo"}}>Get to know me more!</p>
        
    <button style={{textAlign:"left", borderColor:"purple", borderWeight:10, fontSize:16, Weight:200, height: 35, backgroundColor:"#E3C16F"}}>Download Resume</button>
       
       
        </div>
     </div>
    );
  }
}