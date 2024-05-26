import BarChat from './barChat.js';
import {useRef} from "react";



export default function App(props){

   const dataset = useRef();

    document.addEventListener("DOMContentLoaded",
    
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then((response) => {
      return response.json();
   })
    .then((data) => {
       dataset.current =  JSON.stringify(data["data"])
              }
   ));

  
return(
      <div id = "background">
        <div id ="app">
            <h4>United States GDP</h4>
           <BarChat 
           data = {dataset.current} 
           
           />
        </div>
      </div>
)
    
    
   

    

}