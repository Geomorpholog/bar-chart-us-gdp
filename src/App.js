import GetData from './getData.js';

export default function App(props){

return(
      <div id = "background">
        <div id ="app">
            <h4>United States GDP</h4>
           <GetData 
           URL = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
           height = "500"
           width = "1200"
           padding = "100"
           />
        </div>
      </div>
)
    
}