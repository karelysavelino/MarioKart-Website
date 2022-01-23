import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import HOME from "./Home"
import PROJECT from "./Project"
import CONTACT from "./Contact/cover.js"
import RESUME from "./Resume"
import NavBar from "./NavBar.js"

function App() {
  return (
    <>
    <div style={{margin:-8 }}>
    <Router>
      
       

    <Switch>
      <Route path="/project">
        <PROJECT navbar={<NavBar/>}/>
      </Route>
     <Route path="/resume">
       <RESUME navbar={<NavBar/>} />
     </Route >
     <Route path="/contact">
       <CONTACT navbar={<NavBar/>} />
     </Route>
     <Route path="/">
       <HOME navbar={<NavBar/>} />
     </Route>
      

    
   </Switch>

    </Router>
    </div>
    </>
  
  );
}

export default App;
