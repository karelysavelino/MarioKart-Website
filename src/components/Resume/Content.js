import React from "react"
import "./resume.css"
import { Column, Row } from 'simple-flexbox'
import {  faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Resume extends React.Component {
    render() {
      return (
        <>
        <div className="Text" >
          <h1 align="left-center"></h1>

        </div>
        <Technologies/>
        <Experience/>
        <Education/>
       </>
      );
    }
  }
class Technologies extends React.Component {
    render() {
      return (
        <>
      <Column flexGrow={1}>
        <Row horizontal='left'>
          <h1 style={{paddingBottom:50,paddingLeft:30}}>Technologies</h1>
        </Row>
        <Row vertical='center'>
          <Column  flexGrow={1} horizontal='center' alignItems='right'>
            <h3 style={{paddingLeft:400}}> DAY-TO-DAY USE </h3>
            <span> </span>
            <ul style={{fontSize:23, paddingLeft:400}}>
            <li>MySql</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>SNOW</li>
            <li>HTML</li>
            <li>Bomgar</li>
            
          </ul>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <h3> SKILLS </h3>
            <span> </span>
            <ul style={{fontSize:23}}>
            <li>Python</li>
            <li>Node.js</li>
            <li>Selenium</li>
            <li>Tableu</li>
            <li>Stat-Crunch</li>
            </ul>
          </Column>
        </Row>
      </Column>
      </>
      );
    }
  }
  
  class Experience extends React.Component {
    render () {
      return (
        <div>
          <h1 style={{paddingTop:100, paddingLeft:30}}>Work Experience</h1>
            <h3 align="right" style={{paddingTop:65,marginRight:"39%", fontSize:"140%"}}>IT Service Desk Technician</h3>
            <h4 align="right" style={{paddingTop:10, marginRight:"44%", color:"#E3C16F"}}>Montclair State University</h4>
            <p><FontAwesomeIcon style={{marginLeft:"40%", paddingRight:5}} icon={faCalendar} color={"grey"} size={22}/>
              January 2019 – Ongoing
            </p>
            <p style={{marginRight:"2%", marginLeft:"40%"}}>
              Efficiently provided Mac and PC technical support for faculty, staff, and students by email,
            phone,live chat and walk-in support in a timely manner. Utilized Snow tracking software to create, update,
            escalate and close resolved incidents and technical problems daily. Created and provided incident reports to their designated assignment groups for damaged
            equipment to ensure proper measures were taken. Continually honed my skills with the latest documentation, procedures and policies for the Division of Information Technology
            </p>


            <h3 align="right" style={{paddingTop:65,marginRight:"38%", fontSize:"140%"}}>IT Adiminstrative & Support</h3>
            <h4 align="right" style={{paddingTop:10, marginRight:"50%", color:"#E3C16F"}}>Mastercool Inc</h4>
            <p><FontAwesomeIcon style={{marginLeft:"40%", paddingRight:5}} icon={faCalendar} color={"grey"} size={22}/>
              June 2018 – September 2018
            </p>
            <p style={{marginRight:"2%", marginLeft:"40%"}}>
            Served as the first point of contact for clients seeking technical assistance over phone or email. 
            Identified, researched, and resolved incidents for end-users on avariety of automotive and HVAC/R related issues.
            AdministeredandtranslatednewproductinformationintoMaster- cool Databases using SQL servers.
            Oversaw the daily performance of computer systems in the laband maintained inventory for all equipment, and software licenses
            </p>

            <h3 align="right" style={{paddingTop:65,marginRight:"35%", fontSize:"140%"}}>Technical Coordinatoir (Project)</h3>
            <h4 align="right" style={{paddingTop:10, marginRight:"54%", color:"#E3C16F"}}>Novartis</h4>
            <p><FontAwesomeIcon style={{marginLeft:"40%", paddingRight:5}} icon={faCalendar} color={"grey"} size={22}/>
            March 2016 – March 2016
            </p>
            <p style={{marginRight:"2%", marginLeft:"40%"}}>
            Promoted to leadership role accountable for IT implementations into the Osteosarcoma Research project.
            Developed and utilized strong analytical skills to research potential solutions for best software 
            implementations such as Tableau for data recollection.
            Worked closely with other teammates and coordinators to ensure all project stages were fully working.
            Oversaw full life cycle of project according to supervisor parameters.
            </p>

           </div>
      )
    }
  }

  class Education extends React.Component {
    render () {
      return (
        <div>
          <h1 style={{paddingTop:100, paddingLeft:30}}>Education</h1>
          <h3 align="left" style={{paddingTop:65, paddingLeft:490, marginRight:20, fontSize:"140%"}}>B.S. in Management of Information & Technology - 3.6 GPA</h3>
          <h4 align="right" style={{paddingTop:10, marginRight:'46%', color:"#E3C16F"}}>Montclair State University</h4>
          <p><FontAwesomeIcon style={{marginLeft:"39%", paddingRight:5}} icon={faCalendar} color={"grey"} size={22}/>
              September 2018 – May 2022
            </p>
        </div>

      )
     }
    }