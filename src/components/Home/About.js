import React from "react"

const Myimageexample = require('../../images/kare.png');
const divStyle = {
    width: '600ß%',
    height: '600px',
    backgroundImage: `url(${Myimageexample})`,
    backgroundSize: 'full page'   
  };


export default class About extends React.Component{
    render(){
        return (
            <>
            <h1 align="center" style={{paddingLeft:"0"}}>
            <p style={{textAlign:"left",paddingBottom:0, fontSize:44, fontWeight:400, fontFamily:"Arvo"}}></p>Karelys Avelino</h1>
            <h3 style={{paddingTop:'0%', fontSize:'130%'}}align='center'>Systems Analyst</h3>
            <img src={Myimageexample} style={{width:"30%", height:"auto", textAlign: "center", 
            paddingBottom:'2%',
            display: "block",
            justifyContent: "center",
             alignItems: "center",
             margin: "auto",
             borderRadius: 190
             }}>
            </img>
            <i align='center' style={{fontSize:'120%', paddingLeft:'22%'}}>Talented Systems Analyst with expertise in testing, implementation, and web development</i>
            <Me/>
            </>
            
        )
    }
}

/**Kirk thoughts
 * 
 * i plan sounds the same as 
 * 
 */

class Me extends React.Component {
    render() {
      return (
        <div>
            <h1 align='center' style={{paddingTop:'3%', paddingBottom:'0%'}}>About me </h1>
            <p style={{marginLeft:'25%', marginRight:'25%'}}>I design, test & document computer programs and apply broad knowledge of programming techniques and computer systems to evaluate user request for new or modified programs. I formulate plans and outline steps required to develop programs using structured analysis in addition to preparing flowcharts and BPMN diagrams. My background in testing and web development ensures that products and systems are delivered according to accepted standards and specifications.</p>
             <p style={{marginLeft:'25%', marginRight:'25%'}}>My commitment to continuous improvement allows me to be passionate about the delivery of services by working systematically and tirelessly to meet or exceed goals and standards. I consider myself a natural problem solver, finding rewarding to uncover innovative solutions to challenges.</p> 
             <p style={{marginLeft:'25%', marginRight:'25%', paddingBottom:30}}>Constant determination is what led me to a leadership role in the Osteosarcoma Project at Novartis. There, I was accountable for software implementations for the research team. I  believe mindfulness in the workplace is key to success, a tenet I live out through my interests in yoga, reading and coding. I’m currently seeking an IT internship and I’m always interested in a challenge. Let’s connect!</p>
          
        </div>
      
      ) 

    }
}
