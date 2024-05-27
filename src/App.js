import BarChat from './barChat.js';

export default function App(props){

return(
      <div id = "background">
        <div id ="app">
            <h4>United States GDP</h4>
           <BarChat 
           URL = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
           />
        </div>
      </div>
)
    
}