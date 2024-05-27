import {useRef, useEffect} from "react";
import * as d3 from "d3";
 
export default function BarChat(props){
  const dataSet = props.data["data"];
  const bg = useRef();
  let h = useRef();
  let x = useRef();
  let w = useRef();
  useEffect(() => {
    h.current = d3.scaleLinear([d3.min(dataSet,(d) => d[1]),d3.max(dataSet,(d) => d[1])],[10,props.height - props.padding*2]);
    x.current = d3.scaleBand(dataSet.filter((d,i) => i%20 === 0).map(d => new Date(d[0]).getFullYear()),[props.padding,props.width-props.padding])
    w.current = (props.width - props.padding*2)/dataSet.length;
  });
  console.log(dataSet.filter((d,i) => i%20 === 0).map(d => new Date(d[0]).getFullYear()))
  useEffect(() => void d3.select(bg.current)
                          .selectAll("rect")
                          .data(dataSet)
                          .enter()
                          .append("rect")
                          .attr("fill","navy")
                          .attr("x", (d,i) => props.padding/1+i*w.current)
                          .attr("y",d => props.height - h.current(d[1])-props.padding)
                          .attr("width",w.current)
                          .attr("height",d => h.current(d[1]))
  )
    
  useEffect(() => void d3.select(bg.current) 
                         .append("g")
                         .attr("transform", "translate(0," + (props.height - props.padding) + ")")
                         .call(d3.axisBottom(x.current))
  ) 
  useEffect(() => void d3.select(bg.current) 
                         .append("g")
                         .attr("transform", "translate("+ props.padding + "," + props.padding + ")")
                         .call(d3.axisLeft(h.current))
)
    return (
    <div>
        <svg 
          ref = {bg}
          width = {props.width}
          height = {props.height}
          padding = {props.padding}
        >
        </svg>
    </div>
    )
}
 