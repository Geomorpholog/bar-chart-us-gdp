let dataSet
let header = new Headers().append("Content-Type","text/script")
let get = fetch(
     'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',
     {header}    
)
     .then((response) =>{return response.json()})
     .then((data) => dataSet = data)

export default dataSet
console.log(dataSet)