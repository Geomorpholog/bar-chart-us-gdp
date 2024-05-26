import * as d3 from "d3";
import {useRef, useEffect} from "react";

export default function BarChat(props){
   const bg = useRef();
   useEffect(() => void d3.select(bg.current)
   .selectAll("rect")
   .data(props.data)
   .enter()
   .append("rect")
   .attr("fill","black")
   .attr("x", (d, i) => i * 30)
   .attr("y", 0)
   .attr("width", 25)
   
   )


    return (
    <div>
        <svg 
        ref = {bg}
        width = {props.width} 
        height = {props.height} 
        >    
        </svg> 
    </div>)
    
           
}