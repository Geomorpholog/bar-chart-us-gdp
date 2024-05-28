import dataSet from "./getData.js"
  let width = 1200;
  let height = 700;
  let padding = 50;
  
  let h = d3.scaleLinear([0,d3.max(dataSet,(d) => d[1])],[0,height - padding*2]);
  let w = (width - padding*2)/dataSet.length;
  let x = d3.scaleTime([new Date(dataSet[0][0]),new Date("2015-10-01")],[padding,width-padding])
  let y = d3.scaleLinear([0,d3.max(dataSet,(d) => d[1])],[height - padding*2,0]);
      console.log() 
  
d3.select("body")
  .append("svg")
  .attr("width",width + "px")
  .attr("height",height + "px")
  .selectAll("rect")
  .data(dataSet)
  .enter()
  .append("rect")
  .attr("fill","#1938BE")
  .attr("x", (d,i) => padding/1+i*w)
  .attr("y",d => height - h(d[1])-padding)
  .attr("width",w)
  .attr("height",d => h(d[1]))
  .attr("class","bar")
  .attr("data-date",d => d[0])
  .attr("data-gdp",d => d[1])
  .attr("index",(d,i) => i)
  
  .on("mouseover",function(event,d){
      const i = this.getAttribute('index');
      const barHeight = h(this.getAttribute('data-gdp'))
      d3.select("body")
      .append("div")
      .attr("id","tooltip")
      .attr("data-date",this.getAttribute('data-date'))
      .style("width",width/7 +"px")
      .style("height",height/7 +"px")
      .style("background","#282C3F99")
      .style("position","absolute")
      .style("border","solid 2px black")
      .style("top", event.clientY - height/7 + "px")
      .style("left", event.clientX - width/7 + "px")
      .html("Date:" + (this.getAttribute('data-date')) + "," + "<br>" + "$" + (this.getAttribute('data-gdp')) + " Billion")
      
      
  })
  .on("mouseout",function(event){
    d3.select("#tooltip")
    .remove()
  })
  d3.select("svg") 
                         .append("g")
                         .attr("transform", "translate(0," + (height - padding) + ")")
                         .call(d3.axisBottom(x))
                         .attr("id","x-axis")
                    
  d3.select("svg") 
                         .append("g")
                         .attr("transform", "translate("+ padding + "," + padding + ")")
                         .call(d3.axisLeft(y))
                         .attr("id","y-axis")  
    
   