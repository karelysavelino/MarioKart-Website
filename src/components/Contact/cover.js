import React from "react"
import "./App.css"


class App extends React.Component {
constructor(props) {
     super(props) 
}
     render() {
           return (
     <>
     <div  className="App">
     {this.props.navbar}
     <Contact/>
          <div className="App-content" > 
               <input className="textInputs"  type="text" name="name" placeholder="Name"/>
               <br/>
               <input className="textInputs"  type="text" name="email" placeholder="Email"/>
               <br/>
               <input className="textInputs" type="text" name="phone" placeholder='Phone' />
               <br/>
               <textarea className="textInputs" style={{minHeight:180}} name="message" placeholder='Message'/>
               <br/>
               <input className="submitButton" type="submit" value="Submit" />
          
          </div>
     </div>    
     </>
     )
}
}

class Contact extends React.Component {
     render() {
          return (
               <h1 className='Contact'>Contact me</h1>

          )

     }
}
          


export default App;

