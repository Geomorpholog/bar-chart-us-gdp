
let header = new Headers().append("Content-Type","text/script")
let data = await fetch(
     'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',
     {header}    
)

let dataJSON = await data.json()
let dataSet = dataJSON["data"]
     
export default dataSet
console.log(dataSet)
