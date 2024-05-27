import * as d3 from "d3";
import {useRef, useEffect} from "react";
import useSWR from 'swr';


export default function BarChat(props){
    const fetcher = (url) => fetch(url)
          .then((response) => {
             return response.json();
           })
           .then((data) => {
              return JSON.stringify(data["data"])
            }
        );
    const { data, error, isLoading } = useSWR(
        props.URL,
         fetcher)
           
 
    const bg = useRef();
    useEffect(() => void d3.select(bg.current)
   .selectAll("rect")
   .data(data)
   .enter()
   .append("rect")
   .attr("fill","black")
   .attr("x", (d, i) => i * 30)
   .attr("y", 0)
   .attr("width", 25)
   .attr("height", 50)
   ) 

    if (isLoading) return <p>Waiting for a second</p>
    if (error) return <p>ERROR</p>
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