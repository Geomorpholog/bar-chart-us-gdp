let dataSet
let header = new Headers().append("Content-Type","text/script")
fetch(
     'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',
     {header}
     
)
     .then((response) =>{return response.json()})
     .then((data) => dataSet = data["data"])
export default dataSet