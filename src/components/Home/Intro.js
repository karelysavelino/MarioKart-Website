import React from "react"

const imgMyimageexample = require('../../images/whitetree.jpg');
const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundRepeat: 'no-repeat',
 backgroundPosition: 'top center',
  backgroundSize: 'cover'   
};

export default class Intro extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={divStyle} >
        {this.props.navbar}
        <h1 align="center" style={{ paddingTop:"20%",paddingLeft:"0"}}>
        <p style={{textAlign:"left",paddingBottom:0, fontSize:44, fontWeight:400, fontFamily:"Arvo"}}></p>Karelys Avelino</h1>
        <h3 align="center" style={{color:'white'}}>Professional Bio</h3>
      </div>
    );
  }
}



