import React from "react"
import { string } from "prop-types";
import ImageGenerator from "./imageGenerator.ts"

let gen = new ImageGenerator();

async function queryDatabase(query) {
    let url = "http://localhost:3001";
    let res = ""

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: String(query),
        })
    }).then(async (response) => {
        let x = response.text();
        let z = await x;
        let y = JSON.parse(z);

        console.log("RESPONSE AWAIT: ", z);

        console.log("JSON PARSE RESPONSE AWAIT: ", y)

        res = y;

    })

    return res
}

export default class Project extends React.Component{
    constructor(props) {
        super(props) 
        this.state={
                    queryResults: "",
                    characterIndex: 0,
                    bikeIndex:0,
                    tireIndex:0, 

                }

   }

   nextCharacter = () => {
       this.setState({characterIndex : (this.state.characterIndex + 1) %gen.characterNames.length})
   }
   nextBike = () => {
        this.setState({bikeIndex : (this.state.bikeIndex + 1) % gen.bikeNames.length})
   }

   nextTire = () => {
        this.setState({tireIndex : (this.state.tireIndex + 1) % gen.tireNames.length})
   }
   async componentDidMount(){

    let y = await queryDatabase("select * from Characters_Accessories") 

    console.log(y, " is the query value")
    this.setState({queryResults:y})
   }

   renderImage = (map, key, width) => {
    return <img src={map[key]} style={{width:width, height:"auto", textAlign: "center", 
    paddingBottom:'2%',
    display: "block",
    justifyContent: "center",
     alignItems: "center",
     margin: "auto",
     borderRadius: 190
     }}></img>
   }

    render() {
        return (<div>

           {this.renderImage(gen.tires, "triforce_tires", 200)}

        </div>)
        
        /*
        return (
            <div>
            {this.props.navbar}
            <button onClick={()=>{  this.nextCharacter() }}>Character</button>
           <p>characterIndex: {this.state.characterIndex}</p>
           {this.renderImage(gen.characters, gen.characterNames[this.state.characterIndex], 100)}

           <button onClick={()=>{  this.nextBike() }}>Bike</button>
           <p>bikeIndex: {this.state.bikeIndex}</p>
           {this.renderImage(gen.bikes, gen.bikeNames[this.state.bikeIndex], 200)}

           
           <button onClick={()=>{  this.nextTire() }}>Tire</button>
           <p>tireIndex: {this.state.tireIndex}</p>
           {this.renderImage(gen.tires, gen.tireNames[this.state.tireIndex], 200)}



        
          
          </div>
        )*/
        
    }
}